/* Simple password gate for the HUMAN site.
   Runs first on every page. If the visitor hasn't unlocked the site
   in this browser, send them to enter.html. */
(function () {
  var KEY = 'human_site_unlocked';
  var HASH = '79a5478768d2447431a90f7f4549df735f50ad541371464c248abc7522dc3a01';
  try {
    if (localStorage.getItem(KEY) === HASH) return;
  } catch (e) {}
  var here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'enter.html') return;
  location.replace('enter.html?next=' + encodeURIComponent(here + location.search + location.hash));
})();
