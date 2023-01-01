"use strict";

var menuBtn = document.getElementById("menuBtn");
var headerArea = document.getElementById("headerArea");
var headerNav = document.getElementById("headerNav");
var toggleHeaderMenu = function toggleHeaderMenu() {
  if (headerArea.classList.contains("act")) {
    headerNav.classList.add("close");
  } else {
    headerNav.classList.remove("close");
  }
  headerArea.classList.toggle("act");
};
menuBtn.addEventListener("click", function () {
  return toggleHeaderMenu();
});
headerNav.addEventListener("click", function () {
  return toggleHeaderMenu();
});
//# sourceMappingURL=index.js.map