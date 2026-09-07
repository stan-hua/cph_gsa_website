/* ---------------------------------------------------------------------------
   Adds a button to the header that hides / shows the left sidebar on desktop,
   and remembers the choice in this browser. Mobile is untouched — Material's
   own hamburger drawer still works there.
   No dependencies. Safe to leave as-is; nobody needs to edit this file.
   --------------------------------------------------------------------------- */
(function () {
  var KEY = "gsa-nav-collapsed";

  function getPref() {
    try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }
  function setPref(v) {
    try { localStorage.setItem(KEY, v ? "1" : "0"); } catch (e) { /* private mode: ignore */ }
  }
  function apply(v) {
    document.body.classList.toggle("gsa-nav-collapsed", v);
  }

  function init() {
    var header = document.querySelector(".md-header__inner");
    if (!header || document.querySelector(".gsa-nav-toggle")) return;

    // Pages that hide navigation (e.g. the home landing page) get no toggle
    // button. Material marks that sidebar with the `hidden` attribute.
    var primary = document.querySelector(".md-sidebar--primary");
    if (!primary || primary.hasAttribute("hidden")) return;

    var btn = document.createElement("button");
    btn.className = "gsa-nav-toggle md-header__button md-icon";
    btn.type = "button";
    btn.title = "Show or hide the sidebar";
    btn.setAttribute("aria-label", "Show or hide the sidebar");
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">' +
      '<path fill="currentColor" d="M3 5v14h18V5H3m2 2h4v10H5V7m6 0h8v10h-8V7Z"/></svg>';

    var state = getPref();
    apply(state);

    btn.addEventListener("click", function () {
      state = !state;
      apply(state);
      setPref(state);
    });

    header.insertBefore(btn, header.firstChild);
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
