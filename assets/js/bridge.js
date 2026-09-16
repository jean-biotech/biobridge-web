(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var paths = document.querySelectorAll("path.bridge-draw");

  if (!paths.length || reduceMotion || typeof IntersectionObserver === "undefined") {
    return; // leave paths at their default, fully-visible state
  }

  paths.forEach(function (p) {
    var len = Math.ceil(p.getTotalLength());
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.strokeDashoffset = "0";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
  );

  paths.forEach(function (p) {
    observer.observe(p);
  });
})();
