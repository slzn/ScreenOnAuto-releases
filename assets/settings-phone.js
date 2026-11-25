/* The settings manual's phone: a replica of the app's four settings screens (v1.11.0 layout).
   Tapping a row scrolls to its section in the manual; switches toggle, but only on this page.

   Every word on the phone comes from the app's own string resources: str(name) / fmt(name,
   …) / plural(name, n) / arr(name) read assets/settings-ui/<lang>.json, which
   tools/settings-ui-strings.py builds from app-strings/ by collecting exactly the names used
   in this file. So a string used here must be written as one of those four calls with a
   literal name, or the generator will not export it.

   Row order, defaults, tags and dependencies follow the app's res/xml/*_preferences.xml.
   Each row's `doc` (default: its key) is the id of its section in docs/<lang>/settings.md. */
(function () {
  "use strict";
  var host = document.getElementById("settings-phone");
  if (!host) return;
  var lang = document.documentElement.lang || "en";
  var L = null;

  function str(n) { var v = L.s[n]; if (v === undefined) { console.warn("settings-phone: missing", n); return n; } return v; }
  /* Android's format syntax as the app's strings use it: %s / %d in order, %1$s numbered, %% */
  function format(s, args) {
    var next = 0;
    return s.replace(/%(?:(\d+)\$)?([sd%])/g, function (_, i, k) {
      return k === "%" ? "%" : String(args[i ? i - 1 : next++]);
    });
  }
  function fmt(n) { return format(str(n), Array.prototype.slice.call(arguments, 1)); }
  function plural(n, count) {
    var forms = L.p[n], rule = new Intl.PluralRules(lang).select(count);
    return format(forms[rule] || forms.other, [count]);
  }
  function arr(n) { return L.a[n]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function html(s) { return esc(s).replace(/\n/g, "<br>"); }

  /* ---------- state: the app's defaults ---------- */
  var S = {
    page: "main", mirroring: false, priv: false,
    sw: {
      auto_start_mirror: false, keep_awake: false, stop_on_disconnect: true, auto_dim: false, single_app_mirror: false,
      map_action_force_landscape: true, map_action_auto_dim: false, map_action_night_dim: false,
      map_action_back: false, map_action_home: false, map_action_recents: false,
      legacy_buttons_left: false, legacy_buttons_dodge_nav: false,
      force_landscape: false, force_landscape_reverse: false, self_draw: false, nav_fixed_size: false, nav_ignore_strip: true,
      vd_width_gap: false, vd_height_gap: false, night_dim: false, silent_car_start: false, full_screen_share_only: false,
      root_screen_off: false, root_touch_injection: false, root_virtual_touch: false, root_follow_car_night: false,
      root_car_night_from_aa: false, root_display_override: false,
    },
  };
  var CONTROL_KEYS = ["map_action_force_landscape", "map_action_auto_dim", "map_action_night_dim", "map_action_back", "map_action_home", "map_action_recents"];

  /* ---------- icons (line drawings; the screen-buttons page shows the car buttons' shapes) ---------- */
  var ICON = {
    landscape: '<rect x="3" y="7" width="18" height="10" rx="2"/>',
    autodim: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    home: '<path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z"/>',
    recents: '<rect x="5" y="5" width="14" height="14" rx="1.5"/>',
    slot: '<rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke-dasharray="3 2.5"/><path d="M12 8.5v7M8.5 12h7"/>',
  };
  function icon(k) { return '<span class="sp-ic" aria-hidden="true"><svg viewBox="0 0 24 24">' + ICON[k] + "</svg></span>"; }

  /* ---------- the four screens ---------- */
  function tags(list) {
    return (list || []).map(function (t) {
      var label = { exp: str("tag_experimental"), nav: str("tag_nav_mirror"), legacy: str("tag_legacy_mirror") }[t];
      return '<span class="sp-tag' + (t === "exp" ? " exp" : "") + '">' + esc(label) + "</span>";
    }).join("");
  }
  function on(k) { return !!S.sw[k]; }
  function ctrlOn() { return CONTROL_KEYS.filter(on).length; }

  function pages() {
    var off = !S.priv;
    return {
      main: { title: str("app_name"), rows: [
        { type: "status", doc: "mirror" },
        { key: "auto_start_mirror", title: str("pref_auto_start_title"), sum: str("pref_auto_start_summary") },
        { key: "keep_awake", title: str("pref_keep_awake_title"), sum: str("pref_keep_awake_summary") },
        { key: "stop_on_disconnect", title: str("pref_stop_on_disconnect_title"), sum: str("pref_stop_on_disconnect_summary") },
        { key: "auto_dim", title: str("pref_auto_dim_title"), sum: str("pref_auto_dim_summary") },
        { doc: "auto_dim_delay", title: str("pref_auto_dim_delay_title"), value: arr("auto_dim_delay_entries")[1], off: !on("auto_dim") },
        { doc: "auto_launch_package", title: str("pref_auto_launch_title"), sum: str("pref_auto_launch_summary_none") },
        { key: "single_app_mirror", title: str("pref_single_app_title"), sum: str("pref_single_app_summary"), off: true },
        { doc: "screen_buttons", title: str("pref_screen_buttons_title"), sum: str("pref_screen_buttons_summary"), go: "buttons" },
        { doc: "advanced", title: str("pref_advanced_title"), sum: str("pref_advanced_summary"), go: "adv" },
        { doc: "root_features", title: str("pref_root_title"), sum: str("pref_root_summary"), go: "priv" },
        { type: "cat", doc: "category_permissions", title: str("pref_category_permissions"), id: "sp-perms" },
        { type: "perm", doc: "notification_access", title: str("pref_notification_access_title"), sum: str("pref_notification_access_summary") },
        { type: "perm", doc: "overlay_access", title: str("pref_overlay_title"), sum: str("pref_overlay_summary") },
        { type: "perm", doc: "write_settings_access", title: str("pref_write_settings_title"), sum: str("pref_write_settings_summary") },
        { type: "perm", doc: "accessibility_access", title: str("pref_accessibility_title"), sum: str("pref_accessibility_summary"), tags: ["exp"] },
        { type: "cat", title: "" },
        { doc: "about", title: str("pref_about_title"), sum: fmt("about_version", L.version.name, L.version.code) },
      ] },
      buttons: { title: str("pref_screen_buttons_title"), icons: true, rows: [
        { type: "cat", doc: "category_shortcuts", title: str("pref_launch_shortcuts_title"), sum: str("pref_launch_shortcuts_summary"), meta: "0/4" },
      ].concat([1, 2, 3, 4].map(function (i) {
        return { doc: "category_shortcuts", icon: "slot", title: fmt("launch_shortcut_slot", i), sum: str("launch_shortcut_not_set"), sw: false };
      })).concat([
        { type: "cat", doc: "category_control_buttons", title: str("pref_control_buttons_category"), sum: str("pref_control_buttons_category_summary"), meta: ctrlOn() + "/4" },
        { key: "map_action_force_landscape", icon: "landscape", title: str("pref_mapstrip_force_landscape_title"), sum: str("pref_mapstrip_force_landscape_summary"), cap: true },
        { key: "map_action_auto_dim", icon: "autodim", title: str("pref_mapstrip_auto_dim_title"), sum: str("pref_mapstrip_auto_dim_summary"), cap: true },
        { key: "map_action_night_dim", icon: "moon", title: str("pref_mapstrip_night_dim_title"), sum: str("pref_mapstrip_night_dim_summary"), cap: true },
        { key: "map_action_back", icon: "back", title: str("pref_mapstrip_back_title"), sum: str("pref_mapstrip_back_summary"), cap: true, doc: "map_action_nav" },
        { key: "map_action_home", icon: "home", title: str("pref_mapstrip_home_title"), sum: str("pref_mapstrip_home_summary"), cap: true, doc: "map_action_nav" },
        { key: "map_action_recents", icon: "recents", title: str("pref_mapstrip_recents_title"), sum: str("pref_mapstrip_recents_summary"), cap: true, doc: "map_action_nav" },
        { type: "cat", doc: "category_button_placement", title: str("pref_placement_category"), tags: ["legacy"] },
        { key: "legacy_buttons_left", title: str("pref_legacy_buttons_left_title"), sum: str("pref_legacy_buttons_left_summary") },
        { key: "legacy_buttons_dodge_nav", title: str("pref_legacy_dodge_nav_title"), sum: str("pref_legacy_dodge_nav_summary") },
        { doc: "legacy_gaps", title: str("pref_legacy_side_gap_title"), value: "16 dp", num: true, off: on("legacy_buttons_dodge_nav") },
        { doc: "legacy_gaps", title: str("pref_legacy_bottom_gap_title"), value: "16 dp", num: true, off: on("legacy_buttons_dodge_nav") },
        { doc: "legacy_gaps", title: str("pref_legacy_shortcut_gap_title"), value: "16 dp", num: true, off: on("legacy_buttons_dodge_nav") },
        { doc: "legacy_gaps", title: str("pref_legacy_shortcut_top_gap_title"), value: "16 dp", num: true, off: on("legacy_buttons_dodge_nav") },
      ]) },
      adv: { title: str("pref_advanced_title"), rows: [
        { type: "cat", doc: "category_orientation", title: str("pref_orientation_category") },
        { key: "force_landscape", title: str("pref_force_landscape_title"), sum: str("pref_force_landscape_summary") },
        { doc: "force_orientation_mode", title: str("pref_force_orientation_mode_title"), value: str("orientation_mode_landscape") },
        { key: "force_landscape_reverse", title: str("pref_force_landscape_reverse_title"), sum: str("pref_force_landscape_reverse_summary") },
        { type: "cat", doc: "category_display_adjust", title: str("pref_advanced_display_category") },
        { key: "self_draw", title: str("pref_self_draw_title"), sum: str("pref_self_draw_summary"), tags: ["exp"] },
        { doc: "video_delay", title: str("pref_video_delay_title"), sum: str("pref_video_delay_summary"), value: str("value_off"), off: !on("self_draw") },
        { key: "nav_fixed_size", title: str("pref_nav_fixed_size_title"), sum: str("pref_nav_fixed_size_summary"), tags: ["nav"] },
        { key: "nav_ignore_strip", title: str("pref_nav_ignore_strip_title"), sum: str("pref_nav_ignore_strip_summary"), tags: ["nav"], off: on("nav_fixed_size") },
        { key: "vd_width_gap", doc: "vd_gap", split: true, title: str("pref_vd_width_gap_switch_title"), sum: str("pref_vd_width_gap_switch_summary") },
        { key: "vd_height_gap", doc: "vd_gap", split: true, title: str("pref_vd_height_gap_switch_title"), sum: str("pref_vd_height_gap_switch_summary") },
        { type: "cat", doc: "category_night_dim", title: str("pref_night_dim_category") },
        { key: "night_dim", title: str("pref_night_dim_title"), sum: str("pref_night_dim_summary") },
        { doc: "night_dim_trigger", title: str("pref_night_dim_trigger_title"), value: str("night_dim_trigger_car_short"), off: !on("night_dim") },
        { type: "slider", doc: "night_dim_strength", title: str("pref_night_dim_strength_title"), sum: str("pref_night_dim_strength_summary"), value: 50 },
        { type: "cat", doc: "category_car_start", title: str("pref_car_start_category") },
        { key: "silent_car_start", title: str("pref_silent_car_start_title"), sum: str("pref_silent_car_start_summary") },
        { key: "full_screen_share_only", title: str("pref_full_screen_share_only_title"), sum: str("pref_full_screen_share_only_summary") },
      ] },
      priv: { title: str("pref_root_title"), rows: [
        { type: "cat", doc: "root_status", title: str("pref_root_access_category") },
        { type: "conn", doc: "root_status" },
        { doc: "root_force", title: str("pref_root_force_title"), sum: str("pref_root_force_summary"), chev: true },
        { type: "cat", doc: "category_root_features", title: str("pref_root_features_category") },
        { key: "root_screen_off", title: str("pref_root_screen_off_title"), sum: str("pref_root_screen_off_summary"), off: off },
        { key: "root_touch_injection", title: str("pref_root_touch_injection_title"), sum: str("pref_root_touch_injection_summary"), tags: ["legacy"], off: off },
        { key: "root_virtual_touch", title: str("pref_root_virtual_touch_title"), sum: str("pref_root_virtual_touch_summary"), off: off || !on("root_touch_injection") },
        { key: "root_follow_car_night", title: str("pref_root_follow_car_night_title"), sum: str("pref_root_follow_car_night_summary"), off: off },
        { key: "root_car_night_from_aa", title: str("pref_root_car_night_from_aa_title"), sum: str("pref_root_car_night_from_aa_summary"), tags: ["nav"], hidden: off || !on("root_follow_car_night") },
        { doc: "root_mirror_font_scale", title: str("pref_root_mirror_font_scale_title"), value: str("pref_root_mirror_dont_change"), off: off },
        { doc: "root_mirror_nav_mode", title: str("pref_root_mirror_nav_mode_title"), value: str("pref_root_mirror_dont_change"), off: off },
        { doc: "root_mirror_home", title: str("pref_root_mirror_home_title"), value: str("pref_root_mirror_dont_change"), off: off },
        { type: "cat", doc: "category_root_display", title: str("pref_root_display_category") },
        { key: "root_display_override", title: str("pref_root_display_override_title"), sum: str("pref_root_display_override_summary"), off: off },
        { doc: "root_display_shortcut", title: str("pref_root_display_shortcut_title"), sum: str("pref_root_display_shortcut_summary"), chev: true },
        { doc: "root_display_derived", title: str("pref_root_display_derived_title"), sum: off ? str("pref_root_requires_connection") : str("pref_root_display_derived_none"), off: off || !on("root_display_override") },
        { type: "subhead", title: str("subhead_nav_mirror") },
        { doc: "car_size", title: str("pref_root_display_car_size_title"), auto: str("value_auto"), value: "1816 × 696", num: true },
        { doc: "phone_density", title: str("pref_root_display_dpi_title"), sum: str("pref_root_display_dpi_short"), value: str("pref_root_mirror_dont_change") },
        { type: "subhead", title: str("subhead_legacy_mirror") },
        { doc: "car_size", title: str("pref_root_display_car_size_title"), auto: str("value_auto"), value: "1192 × 696", num: true },
        { doc: "phone_density", title: str("pref_root_display_dpi_title"), sum: str("pref_root_display_dpi_short"), value: str("pref_root_mirror_dont_change") },
      ] },
    };
  }

  /* ---------- rendering ---------- */
  function swEl(r) {
    return '<button type="button" class="sp-sw' + (on(r.key) ? " on" : "") + '" role="switch" aria-checked="' + on(r.key) +
      '" aria-label="' + esc(r.title) + '" data-sw="' + r.key + '"' + (r.off ? " disabled" : "") + "></button>";
  }
  function rowEl(r) {
    if (r.hidden) return "";
    var doc = r.doc || r.key;
    if (r.type === "cat") {
      return '<div class="sp-cat"' + (r.id ? ' id="' + r.id + '"' : "") + (doc ? ' data-doc="' + doc + '" role="link" tabindex="0"' : "") + '><div class="sp-ct"><b>' +
        esc(r.title) + tags(r.tags) + "</b>" + (r.sum ? "<span>" + html(r.sum) + "</span>" : "") + "</div>" +
        (r.meta ? '<span class="sp-meta">' + r.meta + "</span>" : "") + "</div>";
    }
    if (r.type === "subhead") return '<div class="sp-subhead">' + esc(r.title) + "</div>";
    if (r.type === "status") return statusEl();
    if (r.type === "conn") return connEl();
    var tail = "";
    if (r.value !== undefined && r.type !== "slider") tail += '<span class="sp-val' + (r.num ? " num" : "") + '">' + (r.auto ? '<span class="sp-auto">' + esc(r.auto) + "</span>" : "") + esc(r.value) + "</span>";
    if (r.type === "perm") tail += '<span class="sp-chip">' + esc(str("perm_not_granted")) + "</span>";
    if (r.go || r.chev) tail += '<span class="sp-chev" aria-hidden="true">›</span>';
    if (r.split) tail += '<span class="sp-vdiv" aria-hidden="true"></span>';
    if (r.key) tail += swEl(r);
    if (r.sw === false) tail += '<span class="sp-sw" aria-hidden="true"></span>';
    var lead = r.icon ? icon(r.icon) : "";
    var tv = r.sum && r.value !== undefined && r.type !== "slider" ? " tv" : "";
    var out = '<div class="sp-row' + (r.off ? " off" : "") + tv + '" data-doc="' + doc + '"' + (r.go ? ' data-go="' + r.go + '"' : "") +
      ' role="link" tabindex="0">' + lead + '<div class="sp-t"><div class="sp-ti">' + esc(r.title) + tags(r.tags) + "</div>" +
      (r.sum ? '<div class="sp-su">' + html(r.sum) + "</div>" : "") + "</div>" + tail + "</div>";
    if (r.type === "slider") out += '<div class="sp-slider" aria-hidden="true"><div class="sp-tr"><i style="width:' + (r.value - 10) / 70 * 100 + '%"></i></div><span>' + r.value + "</span></div>";
    return out;
  }
  function statusEl() {
    var missing = 4;
    var title = S.mirroring ? str("status_mirroring") : str("status_idle");
    var sub = S.mirroring ? str("status_sub_live") : str("status_sub_ready");
    return '<section class="sp-bezel" data-doc="mirror" aria-label="' + esc(str("status_aa_connected")) + '">' +
      '<div class="sp-link"><span class="sp-dot live"></span>' + esc(str("status_aa_connected")) + '<span class="sp-dims">1816 × 696</span></div>' +
      '<div class="sp-state"><div class="sp-big">' + (S.mirroring ? '<span class="sp-live" aria-hidden="true"></span>' : "") + esc(title) + "<small>" + esc(sub) + "</small></div>" +
      '<button type="button" class="sp-go' + (S.mirroring ? " stop" : "") + '" data-act="go">' +
      (S.mirroring ? '<svg viewBox="0 0 12 12" aria-hidden="true"><rect width="12" height="12" rx="2"/></svg>' + esc(str("action_stop_mirroring")) : esc(str("action_start_mirroring"))) + "</button></div>" +
      '<button type="button" class="sp-perm" data-act="perm"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2 1.5 13.5h13z"/><path d="M8 6.5v3.2M8 11.6v.1"/></svg><span>' +
      esc(plural("status_permissions_missing", missing)) + '</span><span class="sp-chev" aria-hidden="true">›</span></button></section>';
  }
  function connEl() {
    var t = S.priv ? fmt("root_conn_connected", str("root_backend_shizuku")) : str("root_backend_shizuku");
    return '<div class="sp-conn" data-doc="root_status" role="link" tabindex="0"><div class="sp-t"><div class="sp-ti">' + (S.priv ? '<span class="sp-dot live"></span>' : "") + esc(t) +
      '</div><div class="sp-su">' + esc(S.priv ? str("root_conn_ready") : str("root_conn_off")) + "</div></div>" +
      '<button type="button" class="sp-act' + (S.priv ? " quiet" : "") + '" data-act="priv">' + esc(S.priv ? str("action_disconnect") : str("action_connect")) + "</button></div>";
  }
  function render(keepScroll) {
    var P = pages()[S.page];
    var list = host.querySelector(".sp-list"), top = keepScroll && list ? list.scrollTop : 0;
    host.innerHTML = '<div class="sp-phone">' +
      '<div class="sp-tbar">' + (S.page !== "main" ? '<button type="button" data-go="main" aria-label="' + esc(str("app_name")) + '">←</button>' : "") +
      "<span>" + esc(P.title) + "</span></div>" +
      '<div class="sp-list' + (P.icons ? " icons" : "") + '">' + P.rows.map(rowEl).join("") + "</div>" +
      '<div class="sp-toast" role="status"></div></div>' +
      '<div class="sp-nums" aria-hidden="true"></div>';
    var l = host.querySelector(".sp-list");
    l.scrollTop = top;
    l.addEventListener("scroll", placeNumbers, { passive: true });
    placeNumbers();
  }

  /* ---------- section numbers ----------
     Every documented setting gets a number, "chapter-section" in the manual's order (chapter =
     the h2: main screen 1, on-screen buttons 2, Advanced 3, Privileged 4), computed here rather
     than written anywhere, so adding a setting renumbers itself in every language. The manual
     shows it inside each section's button; the phone shows it in a gutter outside its frame,
     once per setting (the first row of a group: the four shortcuts share 2-1), so the replica
     itself stays exactly as the app draws it. */
  var NUM = {};
  function numberSections() {
    var ch = 0, n = 0;
    document.querySelectorAll(".sp-doc h2, .sp-doc h3[id], .sp-doc h4[id]").forEach(function (h) {
      if (h.tagName === "H2") { ch++; n = 0; return; }
      if (pageOf(h.id)) NUM[h.id] = ch + "-" + (++n);
    });
  }
  var placing = false;
  function placeNumbers() {
    if (placing) return;
    placing = true;
    requestAnimationFrame(function () {
      placing = false;
      var gutter = host.querySelector(".sp-nums"), list = host.querySelector(".sp-list");
      if (!gutter || !list) return;
      var hostR = host.getBoundingClientRect(), listR = list.getBoundingClientRect();
      gutter.style.top = (listR.top - hostR.top) + "px";
      gutter.style.height = listR.height + "px";
      var seen = {}, html = "";
      list.querySelectorAll("[data-doc]").forEach(function (el) {
        var doc = el.dataset.doc, num = NUM[doc];
        if (!num || seen[doc]) return;
        seen[doc] = true;
        var line = (el.querySelector(".sp-ti, .sp-ct b, .sp-link") || el).getBoundingClientRect();
        var y = line.top - listR.top + Math.min(line.height, 22) / 2 - 9;
        if (y < -18 || y > listR.height) return;
        html += '<span class="sp-num" data-num="' + doc + '" style="top:' + Math.round(y) + 'px">' + num + "</span>";
      });
      gutter.innerHTML = html;
    });
  }
  addEventListener("resize", placeNumbers);
  function toast(msg) {
    var t = host.querySelector(".sp-toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.id); toast.id = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ---------- phone → manual ---------- */
  function jump(doc) {
    var target = document.getElementById(doc);
    if (!target) return;
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    flash(target);
    try { history.replaceState(null, "", "#" + doc); } catch (e) {}
  }
  function flash(el) {
    el.classList.remove("sp-flash"); void el.offsetWidth; el.classList.add("sp-flash");
  }
  host.addEventListener("click", function (e) {
    var sw = e.target.closest("[data-sw]");
    if (sw) {
      var k = sw.dataset.sw;
      if (CONTROL_KEYS.indexOf(k) >= 0 && !on(k) && ctrlOn() >= 4) { toast(str("mapstrip_max_buttons")); return; }
      S.sw[k] = !S.sw[k]; render(true); return;
    }
    var act = e.target.closest("[data-act]");
    if (act) {
      var a = act.dataset.act;
      if (a === "go") { S.mirroring = !S.mirroring; render(true); }
      else if (a === "priv") { S.priv = !S.priv; render(true); }
      else if (a === "perm") { var l = host.querySelector(".sp-list"); l.scrollTop = host.querySelector("#sp-perms").offsetTop - l.offsetTop; }
      return;
    }
    var go = e.target.closest("[data-go]");
    if (go) {   /* a sub-page row opens that page here and scrolls the manual to its chapter */
      if (go.dataset.doc) jump(go.dataset.doc);
      S.page = go.dataset.go; render(false); return;
    }
    var num = e.target.closest("[data-num]");
    if (num) { jump(num.dataset.num); return; }
    var row = e.target.closest("[data-doc]");
    if (row) jump(row.dataset.doc);
  });
  host.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[role=link]")) { e.preventDefault(); e.target.click(); }
  });

  /* ---------- manual → phone: a "show setting" button after each documented setting ---------- */
  function pageOf(doc) {
    var all = pages();
    for (var p in all) {
      if (all[p].rows.some(function (r) { return (r.doc || r.key) === doc; })) return p;
    }
    return null;
  }
  function addBackLinks() {
    var label = host.dataset.show || "Show setting";
    /* rows the app hides until something else is on: "Show setting" turns that on first, as a reader
       would have to, so the row is there to point at */
    var REVEAL = { root_car_night_from_aa: function () { S.priv = true; S.sw.root_follow_car_night = true; } };
    document.querySelectorAll(".sp-doc h3[id], .sp-doc h4[id]").forEach(function (h) {
      var p = pageOf(h.id);
      if (!p) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "sp-show";
      /* the number is the visible reference (it matches the one beside the phone); the words are
         the tooltip and the accessible name, so 58 headings don't each repeat them */
      b.textContent = NUM[h.id] || label;
      b.title = label;
      b.setAttribute("aria-label", NUM[h.id] ? label + " " + NUM[h.id] : label);
      b.addEventListener("click", function () {
        S.page = p;
        if (REVEAL[h.id]) REVEAL[h.id]();
        render(false);
        var row = host.querySelector('[data-doc="' + h.id + '"]');
        if (row) {
          var list = host.querySelector(".sp-list");
          list.scrollTop = row.offsetTop - list.offsetTop - 24;
          flash(row);
          requestAnimationFrame(function () { requestAnimationFrame(function () {
            var n = host.querySelector('[data-num="' + h.id + '"]'); if (n) flash(n);
          }); });
        }
        if (host.getBoundingClientRect().bottom < 0 || host.getBoundingClientRect().top > innerHeight) host.scrollIntoView({ block: "start" });
      });
      h.appendChild(b);
    });
  }

  fetch("/assets/settings-ui/" + lang + ".json")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) { L = data; numberSections(); render(false); addBackLinks(); })
    .catch(function (err) { console.error("settings-phone:", err);
      /* no phone: drop its column and its caption too, and fall back to the plain one-column page */
      (host.closest(".sp-aside") || host).hidden = true;
      var main = host.closest(".doc-wide"); if (main) main.classList.remove("doc-wide");
    });
})();
