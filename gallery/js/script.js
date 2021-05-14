const hamburgerBtn = document.querySelector(".hamburger")
const sideBar = document.querySelector(".sidebar")

hamburgerBtn.addEventListener("click", function() {
  hamburgerBtn.classList.toggle("open-btn");
  sideBar.classList.toggle("open");
});