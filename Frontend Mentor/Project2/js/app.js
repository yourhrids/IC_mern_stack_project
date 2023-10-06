const menuBar = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navbar = document.getElementById("navbar");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
