"use strict";

function classToggle() {
  var navs = document.querySelectorAll('.Navbar__Items');
  navs.forEach(function (nav) {
    return nav.classList.toggle('Navbar__ToggleShow');
  });
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);