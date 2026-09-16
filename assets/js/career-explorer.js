(function () {
  "use strict";

  var root = document.getElementById("career-explorer");
  if (!root || !window.BB_CAREER_ROLES) return;

  var chipsWrap = root.querySelector(".explorer-chips");
  var resultsWrap = root.querySelector(".explorer-results");
  var countEl = root.querySelector(".explorer-count");
  var resetBtn = root.querySelector(".explorer-reset");

  var active = { background: new Set(), interest: new Set(), phd: new Set() };

  var PHD_LABEL = {
    "not-required": "PhD not required",
    "optional": "PhD optional",
    "usually-required": "PhD usually required"
  };
  var PHD_CLASS = {
    "not-required": "badge--go",
    "optional": "badge--maybe",
    "usually-required": "badge--later"
  };

  function matches(role) {
    var groups = ["background", "interest", "phd"];
    for (var i = 0; i < groups.length; i++) {
      var g = groups[i];
      if (active[g].size === 0) continue;
      if (g === "phd") {
        if (!active[g].has(role.phd)) return false;
      } else {
        var roleValues = role[g] || [];
        var any = roleValues.some(function (v) {
          return active[g].has(v);
        });
        if (!any) return false;
      }
    }
    return true;
  }

  function cardHtml(role) {
    var badgeClass = PHD_CLASS[role.phd] || "badge--maybe";
    var badgeLabel = PHD_LABEL[role.phd] || role.phd;
    return (
      '<article class="role-card">' +
        '<div class="role-card__top">' +
          '<h3 class="role-card__title">' + role.title + "</h3>" +
          '<span class="badge ' + badgeClass + '">' + badgeLabel + "</span>" +
        "</div>" +
        '<p class="role-card__salary"><span class="eyebrow">Approx. entry salary</span><br>' + role.salary + "</p>" +
        '<p class="role-card__step">' + role.firstStep + "</p>" +
        '<a class="role-card__link" href="' + role.resourceUrl + '">' + role.resourceText + " &rarr;</a>" +
      "</article>"
    );
  }

  function render() {
    var results = window.BB_CAREER_ROLES.filter(matches);
    countEl.textContent = results.length + (results.length === 1 ? " role" : " roles") + " match" + (results.length === 1 ? "es" : "");

    if (!results.length) {
      resultsWrap.innerHTML =
        '<p class="explorer-empty">No roles match that combination yet. Try clearing a filter, biotech is broader than most people expect.</p>';
      return;
    }
    resultsWrap.innerHTML = results.map(cardHtml).join("");
  }

  chipsWrap.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    var group = chip.getAttribute("data-group");
    var value = chip.getAttribute("data-value");
    var pressed = chip.getAttribute("aria-pressed") === "true";

    if (pressed) {
      active[group].delete(value);
      chip.setAttribute("aria-pressed", "false");
    } else {
      active[group].add(value);
      chip.setAttribute("aria-pressed", "true");
    }
    render();
  });

  resetBtn.addEventListener("click", function () {
    active.background.clear();
    active.interest.clear();
    active.phd.clear();
    chipsWrap.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", "false");
    });
    render();
  });

  render();
})();
