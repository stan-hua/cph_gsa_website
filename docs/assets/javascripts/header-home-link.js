/* ---------------------------------------------------------------------------
   Makes the "CoPHe" wordmark in the header a link to the home page.

   Material puts the home link on the logo image, which this site hides — the
   tile and the wordmark said the same thing twice. So the wordmark takes the
   link over. The href is read off Material's own (hidden) logo anchor rather
   than guessed, so it stays right whatever the site is deployed under.

   Without JavaScript the wordmark is simply not a link; nothing else changes,
   and Home is still the first item in the sidebar.
   No dependencies. Safe to leave as-is; nobody needs to edit this file.
   --------------------------------------------------------------------------- */
(function () {
  function init() {
    var topic = document.querySelector(".md-header__topic:first-child");
    var logo = document.querySelector(".md-header__button.md-logo");
    var name = topic && topic.querySelector(".md-ellipsis");
    if (!topic || !logo || !name || topic.querySelector(".gsa-home-link")) return;

    var link = document.createElement("a");
    link.className = "gsa-home-link";
    link.href = logo.getAttribute("href");
    link.title = "Home";
    topic.insertBefore(link, name);
    link.appendChild(name);

    // Tells the stylesheet to move the "Re" inside the link, so the whole
    // wordmark is clickable rather than just "CoHe".
    topic.classList.add("gsa-linked");
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
