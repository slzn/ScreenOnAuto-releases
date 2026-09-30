/* /join/ — sign-up page for the half-hourly tester rotation.
   Backend: the "ScreenOnAuto Rotation" Apps Script web app.
   Rounds are UTC-aligned half hours: sign-ups :00–:25, the VM swaps the Play tester
   list at :25, and the batch can install from the next :00/:30 until the next swap. */
(function () {
  "use strict";

  var API = "https://script.google.com/macros/s/AKfycbwFQnQeb_c8kVVa7Jv5PfuRIurBOn3S4dE5fTLUl5cJbAV9mY7pwIMrgKnPhrrEJ44m/exec";
  var CLIENT_ID = "745158970576-s17vs6mgqn21eib74fkun0auigbbfbha.apps.googleusercontent.com";
  var OPT_IN = "https://play.google.com/apps/internaltest/4701398309137571774";
  var STORE = "https://play.google.com/store/apps/details?id=idv.lzn.screenonauto";
  var ROUND_MS = 30 * 60 * 1000, COLLECT_MS = 25 * 60 * 1000;
  var POLL_MS = 30 * 1000;       // refresh the slot count this often
  var BOUNDARY_LAG_MS = 3000;    // refresh this long after a phase boundary
  var TOKEN_KEY = "join.idToken";

  // ---- language ----
  var STRINGS = window.JOIN_STRINGS;
  var lang = pickLang();
  function pickLang() {
    var asked = new URLSearchParams(location.search).get("lang");
    var wanted = (asked ? [asked] : []).concat(navigator.languages || [navigator.language || "en"]);
    for (var i = 0; i < wanted.length; i++) {
      var w = String(wanted[i]);
      if (STRINGS[w]) return w;
      var base = w.split("-")[0].toLowerCase();
      if (base === "zh" && STRINGS["zh-TW"]) return "zh-TW";
      if (base === "pt" && STRINGS["pt-BR"]) return "pt-BR";
      if (STRINGS[base]) return base;
    }
    return "en";
  }
  function t(key, vars) {
    var s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
    return s.replace(/\{(\w+)\}/g, function (m, k) { return vars && k in vars ? vars[k] : m; });
  }

  // ---- time (server clock, so a wrong phone clock can't shift the rounds) ----
  var skew = 0;
  function now() { return Date.now() + skew; }
  function roundStart(tm) { return Math.floor(tm / ROUND_MS) * ROUND_MS; }
  function collecting(tm) { return tm - roundStart(tm) < COLLECT_MS; }
  function mmss(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }
  function clockTime(tm) {
    return new Date(tm - skew).toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
  }

  // ---- state ----
  var token = loadToken();
  var email = token ? tokenEmail(token) : null;
  var slots = 95, taken = 0;
  var me = null;           // {state, from?, until?} from the backend; null when signed out
  var busy = false;        // a join request is in flight
  var notice = "";         // one-line error under the action card
  var nextRefresh = 0;

  function loadToken() {
    try {
      var tk = sessionStorage.getItem(TOKEN_KEY);
      return tk && tokenExp(tk) > Date.now() + 60000 ? tk : null;
    } catch (err) { return null; }
  }
  function saveToken(tk) {
    token = tk; email = tk ? tokenEmail(tk) : null;
    try { tk ? sessionStorage.setItem(TOKEN_KEY, tk) : sessionStorage.removeItem(TOKEN_KEY); } catch (err) {}
  }
  function claims(tk) {
    try { return JSON.parse(atob(tk.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))); }
    catch (err) { return {}; }
  }
  function tokenExp(tk) { return (claims(tk).exp || 0) * 1000; }
  function tokenEmail(tk) { return claims(tk).email || ""; }

  // ---- backend ----
  // Every call is safe to repeat, and a fresh Apps Script deployment sometimes answers the
  // redirect hop with a 404 page, so retry anything that isn't JSON.
  function call(body, attempt) {
    attempt = attempt || 0;
    var sentAt = Date.now();
    var req = body
      ? fetch(API, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body) })
      : fetch(API);
    return req
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (typeof data.now === "number") skew = data.now - (sentAt + Date.now()) / 2;
        return data;
      })
      .catch(function (err) {
        if (attempt >= 2) throw err;
        return new Promise(function (ok) { setTimeout(ok, 1200 * (attempt + 1)); })
          .then(function () { return call(body, attempt + 1); });
      });
  }

  function refresh() {
    nextRefresh = Infinity;   // no overlapping refreshes; reset when this one settles
    var req = token ? call({ action: "status", idToken: token }) : call(null);
    return req.then(function (data) {
      if (!data.ok && data.error === "auth") {
        saveToken(null); me = null; notice = t("errSignin");
        promptSignIn();
      } else if (data.ok) {
        if (data.slots !== slots) { slots = data.slots; applyStaticText(); }
        taken = data.taken;
        me = data.me || null;
        if (notice === t("errNetwork")) notice = "";
      }
    }, function () {
      notice = t("errNetwork");
    }).then(function () {
      scheduleRefresh(); render();
    });
  }

  function scheduleRefresh() {
    var n = now(), rs = roundStart(n);
    var boundary = collecting(n) ? rs + COLLECT_MS : rs + ROUND_MS;
    var at = Math.min(n + POLL_MS, boundary + BOUNDARY_LAG_MS);
    nextRefresh = Date.now() + (at - n);
  }

  function join() {
    if (busy) return;
    busy = true; notice = ""; render();
    call({ action: "join", idToken: token }).then(function (data) {
      if (data.ok) {
        slots = data.slots; taken = data.taken; me = data.me;
      } else if (data.error === "auth") {
        saveToken(null); me = null; notice = t("errSignin"); promptSignIn();
      } else if (data.error === "busy") {
        notice = t("errBusy");
      } else {
        // full / closed / installing: the status call shows the right screen.
        return refresh();
      }
    }, function () {
      notice = t("errNetwork");
    }).then(function () {
      busy = false; render();
    });
  }

  // ---- Google sign-in ----
  var gisReady = false;
  function initGis() {
    if (gisReady || !(window.google && google.accounts && google.accounts.id)) return false;
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: function (resp) {
        saveToken(resp.credential); notice = ""; render(); refresh();
      },
      auto_select: true,
      cancel_on_tap_outside: false,
      use_fedcm_for_prompt: true
    });
    gisReady = true;
    return true;
  }
  function promptSignIn() {
    if (initGis() || gisReady) google.accounts.id.prompt();
  }
  function renderGisButton(el) {
    if (!gisReady && !initGis()) {
      // The GSI script loads async; try again shortly.
      setTimeout(function () { if (!token) { lastKey = ""; render(); } }, 300);
      return;
    }
    google.accounts.id.renderButton(el, {
      theme: document.documentElement.dataset.theme === "light" ? "outline" : "filled_black",
      size: "large", shape: "pill", text: "signin_with", locale: lang
    });
  }

  // ---- rendering ----
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text != null) e.textContent = text;
    return e;
  }

  function renderClock() {
    var n = now(), rs = roundStart(n), open = collecting(n);
    document.getElementById("phase").textContent = open ? t("phaseCollecting") : t("phaseSwapping");
    document.querySelector(".clock").classList.toggle("swapping", !open);
    document.getElementById("digits").textContent = mmss((open ? rs + COLLECT_MS : rs + ROUND_MS) - n);
    document.getElementById("digits-label").textContent = open ? t("closesIn") : t("opensIn");
    document.getElementById("meter-fill").style.width = Math.min(100, taken / slots * 100) + "%";
    document.getElementById("meter-label").textContent = t("spots", { taken: taken, slots: slots });
  }

  function renderAction() {
    var box = document.getElementById("action");
    box.textContent = "";
    var n = now(), rs = roundStart(n), open = collecting(n);
    var nextOpen = rs + ROUND_MS;

    function title(key) { box.appendChild(el("h2", null, t(key))); }
    function body(text) { box.appendChild(el("p", null, text)); }

    if (!token) {
      title("signinTitle");
      body(t("signinBody"));
      var holder = el("div", { "class": "gis" });
      box.appendChild(holder);
      renderGisButton(holder);
    } else if (!me) {
      body("…");
    } else if (me.state === "installable") {
      box.classList.add("go");
      title("installTitle");
      body(t("installBody", { mmss: mmss(me.until - n) }));
      var steps = el("ol", { "class": "install-steps" });
      [["step1", "step1Desc", OPT_IN], ["step2", "step2Desc", STORE]].forEach(function (s) {
        var li = el("li");
        var a = el("a", { "class": "btn primary", href: s[2], target: "_blank", rel: "noopener" }, t(s[0]));
        li.appendChild(a);
        li.appendChild(el("span", null, t(s[1])));
        steps.appendChild(li);
      });
      box.appendChild(steps);
      box.appendChild(el("p", { "class": "hint" }, t("installHint")));
      var done = el("p", { "class": "hint" });
      done.appendChild(el("a", { href: "/docs/" + lang + "/how-to-use/" }, t("installDone")));
      box.appendChild(done);
    } else if (me.state === "waiting") {
      title("waitingTitle");
      body(t("waitingBody", { mmss: mmss(me.from - n), time: clockTime(me.from) }));
    } else if (me.state === "failed" || me.state === "none") {
      if (me.state === "failed") { title("failedTitle"); body(t("failedBody")); }
      if (!open) {
        if (me.state !== "failed") title("closedTitle");
        body(t("closedBody", { mmss: mmss(nextOpen - n), time: clockTime(nextOpen) }));
      } else if (taken >= slots) {
        if (me.state !== "failed") title("fullTitle");
        body(t("fullBody", { mmss: mmss(nextOpen - n), time: clockTime(nextOpen) }));
      } else {
        if (me.state !== "failed") title("openTitle");
        body(t("openBody", {
          left: slots - taken, slots: slots,
          mmss: mmss(rs + COLLECT_MS - n), time: clockTime(nextOpen)
        }));
        var btn = el("button", { "class": "btn primary", type: "button" }, busy ? t("signingUp") : t("signUp"));
        if (busy) btn.disabled = true;
        btn.addEventListener("click", join);
        box.appendChild(btn);
      }
    }
    if (me && me.state !== "installable") box.classList.remove("go");
    if (notice) box.appendChild(el("p", { "class": "notice-line" }, notice));
  }

  function renderAccount() {
    var row = document.getElementById("account");
    row.hidden = !token;
    if (token) document.getElementById("account-email").textContent = t("signedInAs", { email: email });
  }

  // The action card is rebuilt at most once a second, and only when its text changes,
  // so the Google button iframe isn't torn down on every tick.
  var lastKey = "";
  function render() {
    renderClock();
    renderAccount();
    var n = now();
    var key = [token ? 1 : 0, me && me.state, busy, notice, taken, slots, collecting(n),
      Math.floor(n / 1000)].join("|");
    if (!token) key = [0, notice, collecting(n)].join("|");   // keep the sign-in button still
    if (key !== lastKey) { lastKey = key; renderAction(); }
  }

  function applyStaticText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("title");
    document.querySelectorAll("[data-t]").forEach(function (e) {
      e.textContent = t(e.getAttribute("data-t"), { slots: slots });
    });
  }

  document.getElementById("switch").addEventListener("click", function () {
    if (gisReady) google.accounts.id.disableAutoSelect();
    saveToken(null); me = null; notice = ""; lastKey = ""; render();
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") refresh();
  });

  // Load Google sign-in with the page's language: the button ignores renderButton's
  // `locale` in favour of the browser/account language, but honours the script's hl.
  var gsi = document.createElement("script");
  gsi.src = "https://accounts.google.com/gsi/client?hl=" + encodeURIComponent(lang);
  gsi.async = true;
  document.head.appendChild(gsi);

  applyStaticText();
  render();
  refresh();
  setInterval(function () {
    if (Date.now() >= nextRefresh) refresh();
    render();
  }, 1000);
  // Returning visitors: let One Tap / FedCM sign them in without a click.
  window.addEventListener("load", function () { if (!token) promptSignIn(); });
})();
