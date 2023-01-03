const menuBtn = document.getElementById("menuBtn")
const headerArea = document.getElementById("headerArea")
const headerNav = document.getElementById("headerNav")
const googleMap = document.querySelector(".googleMap")

const toggleHeaderMenu = () => {
  if (headerArea.classList.contains("act")) {
    headerNav.classList.add("close")
  } else {
    headerNav.classList.remove("close")
  }

  if (googleMap) {
    googleMap.classList.toggle("act")
  }

  headerArea.classList.toggle("act")
}
menuBtn.addEventListener("click", () => toggleHeaderMenu())

headerNav.addEventListener("click", () => toggleHeaderMenu())
