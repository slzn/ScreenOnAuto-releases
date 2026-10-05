/* /join/ — sign-up page for the half-hourly tester rotation.
   Backend: rotation-server on the VM, behind Caddy (ScreenOnAuto-util/rotation-server).
   It replaced the Apps Script web app in October 2026 and speaks the same protocol.
   Rounds are UTC-aligned half hours: sign-ups :00–:25, the VM swaps the Play tester
   list at :25, and the batch can install from the next :00/:30 until the next swap. */
(function () {
  "use strict";

  var API = "https://api.screenonauto.lzn.idv.tw/";
  var CLIENT_ID = "745158970576-s17vs6mgqn21eib74fkun0auigbbfbha.apps.googleusercontent.com";
  var OPT_IN = "https://play.google.com/apps/internaltest/4701398309137571774";
  var STORE = "https://play.google.com/store/apps/details?id=idv.lzn.screenonauto";
  var ISSUES = "https://github.com/slzn/ScreenOnAuto-releases/issues/new";
  var ROUND_MS = 30 * 60 * 1000, COLLECT_MS = 25 * 60 * 1000;
  var POLL_MS = 30 * 1000;       // refresh the slot count this often
  var SYNCING_POLL_MS = 10 * 1000;   // … and this often while waiting for the swap to land
  var BOUNDARY_LAG_MS = 3000;    // refresh this long after a phase boundary
  // The backend answers in well under a second, so a request still open after 10 s is lost
  // (a dropped mobile connection) — abort it and let call() retry. Without a timeout the fetch
  // never reaches the retry. (It was 30 s for Apps Script, whose cold starts hung 17–25+ s.)
  var REQUEST_TIMEOUT_MS = 10000;
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
  // Round to the minute: the boundaries are whole minutes on the server clock, and a few ms
  // of skew would otherwise show 10:25 as 10:24 (toLocaleTimeString truncates).
  function clockTime(tm) {
    return new Date(Math.round((tm - skew) / 60000) * 60000).toLocaleTimeString(lang, { hour: "numeric", minute: "2-digit" });
  }

  // ---- state ----
  var token = loadToken();
  var email = token ? tokenEmail(token) : null;
  var slots = null, taken = 0;  // null until the backend first answers — show "…", not a made-up count
  var me = null;           // {state, from?, until?} from the backend; null when signed out
  var busy = false;        // a join request is in flight
  var notice = "";         // one-line error under the action card
  var nextRefresh = 0;
  var refreshing = null;   // the status request in flight, so callers share it instead of stacking

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
  // Every call is safe to repeat, so retry anything that isn't JSON — e.g. Caddy's 502 for
  // the few seconds the backend container restarts during a deploy.
  function call(body, attempt) {
    attempt = attempt || 0;
    var sentAt = Date.now();
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, REQUEST_TIMEOUT_MS);
    var req = body
      ? fetch(API, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body), signal: ctrl.signal })
      : fetch(API, { signal: ctrl.signal });
    return req
      .then(function (r) { return r.json(); })
      .then(function (data) {
        clearTimeout(timer);
        if (typeof data.now === "number") skew = data.now - (sentAt + Date.now()) / 2;
        return data;
      }, function (err) { clearTimeout(timer); throw err; })
      .catch(function (err) {
        if (attempt >= 2) throw err;
        return new Promise(function (ok) { setTimeout(ok, 1200 * (attempt + 1)); })
          .then(function () { return call(body, attempt + 1); });
      });
  }

  // One status request at a time: the poll, tab-visible and sign-in paths all call this, and
  // with a slow backend overlapping calls only add to its queue. A call made while one is in
  // flight joins it; if the token changed meanwhile (sign-in), the answer is for the old
  // token, so ask again as soon as it lands.
  function refresh() {
    if (refreshing) return refreshing;
    nextRefresh = Infinity;   // reset when this one settles
    var sentToken = token, stale = false;
    var req = token ? call({ action: "status", idToken: token }) : call(null);
    return refreshing = req.then(function (data) {
      if (token !== sentToken) { stale = true; return; }   // signed in or out while in flight
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
      if (token !== sentToken) stale = true;
      else notice = t("errNetwork");
    }).then(function () {
      refreshing = null;
      if (stale) return refresh();
      scheduleRefresh(); render();
    });
  }

  // The install window has come but the swap hasn't landed yet: the backend says "syncing"
  // (it allows a grace period before calling the round failed), or it still says "waiting"
  // with a start time that has passed.
  function syncing(n) {
    return !!me && (me.state === "syncing" || (me.state === "waiting" && me.from <= n));
  }

  function scheduleRefresh() {
    var n = now(), rs = roundStart(n);
    var boundary = collecting(n) ? rs + COLLECT_MS : rs + ROUND_MS;
    var poll = syncing(n) ? SYNCING_POLL_MS : POLL_MS;
    var at = Math.min(n + poll, boundary + BOUNDARY_LAG_MS);
    nextRefresh = Date.now() + (at - n);
  }

  function join() {
    if (busy) return;
    busy = true; notice = ""; render();
    call({ action: "join", idToken: token }).then(function (data) {
      if (data.ok) {
        if (data.slots !== slots) { slots = data.slots; applyStaticText(); }
        taken = data.taken; me = data.me;
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

  // ---- problem report: a prefilled GitHub issue ----
  // Built at click time so it carries the state the visitor is actually looking at. The
  // issue is public, so it never includes the email address — only what helps find the
  // round in the VM's rotate.log.
  // Round numbers are half hours since 1970 UTC; show when the round started too, in the
  // owner's zone (Taipei, as in rotate.log) and UTC.
  function roundStartText(round, zone) {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
    }).format(new Date(round * ROUND_MS));
  }
  function reportUrl() {
    var n = now(), state = !token ? "signed-out" : (me ? me.state : "loading");
    var round = Math.floor(n / ROUND_MS);
    var taipei = roundStartText(round, "Asia/Taipei");
    var body = [
      "<!-- " + t("reportIntro") + " -->",
      "**" + t("reportWhat") + "**",
      "", "", "",
      "**" + t("reportScreens") + "**",
      "", "", "",
      "---",
      "Diagnostics (filled in automatically):",
      "- Page state: " + state,
      "- Round: " + round + " — started " + taipei + " Taipei (" + roundStartText(round, "UTC").slice(11) +
        " UTC), " + (collecting(n) ? "sign-ups open" : "swapping"),
      "- Time (UTC): " + new Date(n).toISOString().slice(0, 16).replace("T", " "),
      "- Slots: " + (slots === null ? "?" : taken + " / " + slots),
      "- Page language: " + lang,
      "- Browser: " + navigator.userAgent
    ].join("\n");
    return ISSUES + "?title=" + encodeURIComponent("[Sign-up] " + state + " — round " + round + " (" + taipei + " Taipei)") +
      "&body=" + encodeURIComponent(body);
  }
  function reportLink() {
    var a = el("a", { href: ISSUES, target: "_blank", rel: "noopener" }, t("reportLink"));
    a.addEventListener("click", function () { a.href = reportUrl(); });
    return a;
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
    document.getElementById("spots").textContent = slots === null ? "…" : t("spots", { taken: taken, slots: slots });
    renderFlow(n, rs, open);
  }

  // The strip under the clock: which step of a round is happening now. It follows this
  // round, except while the visitor's own install window is open (or about to be).
  function renderFlow(n, rs, open) {
    var sync = syncing(n), mine = me && me.state === "installable";
    var steps = { signup: [0, ""], swap: [0, ""], install: [0, ""] };   // [fill 0–1, class]
    var from = mine ? (me.from || me.until - COLLECT_MS) : 0;
    if (mine) {
      steps.signup[1] = steps.swap[1] = "done";
      steps.install = [(n - from) / (me.until - from), "on"];
    } else if (sync) {
      steps.signup[1] = "done";
      steps.swap = [1, "on"];
    } else if (open) {
      steps.signup = [(n - rs) / COLLECT_MS, "on"];
    } else {
      steps.signup[1] = "done";
      steps.swap = [(n - rs - COLLECT_MS) / (ROUND_MS - COLLECT_MS), "on"];
    }
    Object.keys(steps).forEach(function (k) {
      var seg = document.getElementById("flow-" + k), s = steps[k];
      seg.classList.toggle("on", s[1] === "on");
      seg.classList.toggle("done", s[1] === "done");
      seg.querySelector(".flow-bar span").style.width =
        (s[1] === "done" ? 100 : s[1] ? Math.max(0, Math.min(1, s[0])) * 100 : 0) + "%";
    });

    var cap = "", vars = { close: clockTime(rs + COLLECT_MS), open: clockTime(rs + ROUND_MS) };
    if (mine) { cap = "flowCapInstall"; vars.until = clockTime(me.until); }
    else if (sync) cap = "";
    else if (me && me.state === "waiting") { cap = open ? "flowCapIn" : "flowCapSwap"; vars.open = clockTime(me.from); }
    else if (!open) cap = "flowCapSwap";
    else if (slots === null || taken < slots) cap = "flowCapOpen";
    var text = cap ? t(cap) : "";
    var box = document.getElementById("flow-caption");
    var key = [cap, vars.close, vars.open, vars.until].join("|");
    if (box.getAttribute("data-key") === key) return;   // rebuilt only when it changes
    box.setAttribute("data-key", key);
    box.textContent = "";
    // The times are bold; everything else is plain text.
    text.split(/(\{close\}|\{open\}|\{until\})/).forEach(function (part) {
      var m = /^\{(close|open|until)\}$/.exec(part);
      if (m) box.appendChild(el("b", null, vars[m[1]]));
      else if (part) box.appendChild(document.createTextNode(part));
    });
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
    } else if (syncing(n)) {
      title("waitingTitle");
      body(t("syncingBody"));
    } else if (me.state === "waiting") {
      title("waitingTitle");
      body(t("waitingBody", { mmss: mmss(me.from - n), time: clockTime(me.from) }));
    } else if (me.state === "failed" || me.state === "none") {
      if (me.state === "failed") {
        title("failedTitle"); body(t("failedBody"));
        var rp = el("p", { "class": "hint" }); rp.appendChild(reportLink()); box.appendChild(rp);
      }
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

  // The shared top-right language menu (_includes/tools.html, join mode) links every language
  // to /join/?lang=…, because the build can't know which one this visit picks. Tick the
  // current one the way the landing pages do: an unlinked entry with aria-current, its name
  // on the menu button.
  function markLangMenu() {
    var link = document.querySelector('.lang-menu a[lang="' + lang + '"]');
    if (!link) return;
    var cur = document.createElement("span");
    cur.lang = lang;
    cur.setAttribute("aria-current", "page");
    cur.textContent = link.textContent;
    link.parentNode.replaceChild(cur, link);
    var summary = document.querySelector(".lang-menu > summary");
    summary.querySelector(".cur").textContent = cur.textContent;
    summary.title = link.getAttribute("data-label");
    summary.setAttribute("aria-label", link.getAttribute("data-label") + ": " + cur.textContent);
  }

  function applyStaticText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("title");
    document.querySelectorAll("[data-t]").forEach(function (e) {
      e.textContent = t(e.getAttribute("data-t"), { slots: slots === null ? "…" : slots, n: e.getAttribute("data-n") });
    });
  }

  // FAQ: static copy; {verify} / {howto} in an answer become links to the landing page's
  // "Verify in Android Auto" section and the How to Use guide, in the page's language.
  var FAQ_COUNT = 9;
  function renderFaq() {
    var links = {
      verify: [(lang === "en" ? "/" : "/" + lang + "/") + "#verify", t("verifyLink")],
      howto: ["/docs/" + lang + "/how-to-use/", t("howtoLink")]
    };
    var list = document.getElementById("faq-list");
    list.textContent = "";
    for (var i = 1; i <= FAQ_COUNT; i++) {
      var d = el("details");
      d.appendChild(el("summary", null, t("faq" + i + "q")));
      var p = el("p");
      t("faq" + i + "a").split(/(\{verify\}|\{howto\})/).forEach(function (part) {
        var m = /^\{(verify|howto)\}$/.exec(part);
        if (m) p.appendChild(el("a", { href: links[m[1]][0] }, links[m[1]][1]));
        else if (part) p.appendChild(document.createTextNode(part));
      });
      d.appendChild(p);
      list.appendChild(d);
    }
    var rp = el("p", { "class": "report" });
    rp.appendChild(reportLink());
    list.appendChild(rp);
  }

  document.getElementById("switch").addEventListener("click", function () {
    if (gisReady) google.accounts.id.disableAutoSelect();
    saveToken(null); me = null; notice = ""; lastKey = ""; render();
  });
  // The Google button's theme is fixed when it renders, so redraw it when the theme flips.
  new MutationObserver(function () {
    if (!token) { lastKey = ""; render(); }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
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
  markLangMenu();
  renderFaq();
  render();
  refresh();
  setInterval(function () {
    if (Date.now() >= nextRefresh) refresh();
    render();
  }, 1000);
  // Returning visitors: let One Tap / FedCM sign them in without a click.
  window.addEventListener("load", function () { if (!token) promptSignIn(); });
})();
