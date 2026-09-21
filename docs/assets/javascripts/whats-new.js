/* Badges pages that changed recently, and sections waiting for content.
 *
 * "new" and "updated" come from window.CPH_WHATS_NEW, which hooks/last_edited.py
 * builds from the git history, and sit on the page title and its sidebar entry.
 * "pending" is worked out from the page itself: every section holding a gap marker
 * gets one on its heading.
 */

(function () {
  "use strict";

  var data = window.CPH_WHATS_NEW || { pages: {} };
  var pages = data.pages || {};
  var base = data.base || "/";

  /* The generated keys are page urls relative to the site root, with "" for the
     home page. Turn a link's pathname into the same shape. */
  function keyFor(pathname) {
    var path = pathname;
    if (base !== "/" && path.indexOf(base) === 0) path = path.slice(base.length);
    else if (base === "/") path = path.replace(/^\//, "");
    if (path === "index.html") path = "";
    return path;
  }

  function stateFor(pathname) {
    var key = keyFor(pathname);
    return Object.prototype.hasOwnProperty.call(pages, key)
      ? { key: key, info: pages[key] }
      : null;
  }

  var LABELS = { "new": "new", updated: "updated", pending: "pending" };
  var TITLES = {
    "new": "Added in the last " + (data.windowDays || 30) + " days",
    updated: "Edited in the last " + (data.windowDays || 30) + " days",
    pending: "Waiting for someone to fill something in"
  };

  function pill(kind) {
    var el = document.createElement("span");
    el.className = "whats-new-pill whats-new-pill--" + kind;
    el.textContent = LABELS[kind];
    el.title = TITLES[kind];
    return el;
  }

  function pillsFor(info) {
    return info.state ? [info.state] : [];
  }

  /* Sidebar and section-index links. */
  function markNav() {
    var links = document.querySelectorAll(".md-nav__link");
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (!link.pathname || link.querySelector(".whats-new-pill")) continue;
      var hit = stateFor(link.pathname);
      if (!hit) continue;
      var label = link.querySelector(".md-ellipsis") || link;
      pillsFor(hit.info).forEach(function (kind) {
        label.appendChild(pill(kind));
      });
    }
  }

  /* The page you are on: a pill next to the H1. */
  function markPage() {
    var here = stateFor(window.location.pathname);
    if (!here) return;
    var h1 = document.querySelector(".md-content__inner h1");
    if (!h1 || h1.querySelector(".whats-new-pill")) return;
    pillsFor(here.info).forEach(function (kind) {
      h1.appendChild(pill(kind));
    });
  }

  /* Gaps are marked in the page itself, so the pill goes on the heading of the
     section that holds one. A page with a single missing figure then shows a
     single badge, rather than the whole page looking unfinished. */
  function markPendingSections() {
    var root = document.querySelector(".md-content__inner .md-typeset") ||
               document.querySelector(".md-content__inner");
    if (!root) return;

    var gaps = root.querySelectorAll("p.todo.pending, span.todo");
    var counts = [];

    for (var i = 0; i < gaps.length; i++) {
      var block = gaps[i];
      while (block && block.parentNode !== root) block = block.parentNode;

      var heading = block;
      while (heading && !/^H[1-6]$/.test(heading.tagName)) {
        heading = heading.previousElementSibling;
      }
      if (!heading) heading = root.querySelector("h1");
      if (!heading) continue;

      var seen = counts.filter(function (c) { return c.el === heading; })[0];
      if (seen) seen.n += 1;
      else counts.push({ el: heading, n: 1 });
    }

    counts.forEach(function (c) {
      if (c.el.querySelector(".whats-new-pill--pending")) return;
      var el = pill("pending");
      el.title = c.n === 1
        ? "Waiting on something nobody has supplied yet"
        : c.n + " gaps in this section, waiting to be filled in";
      c.el.appendChild(el);
    });
  }

  function run() {
    markNav();
    markPage();
    markPendingSections();
  }

  if (document.readyState !== "loading") run();
  else document.addEventListener("DOMContentLoaded", run);
})();
