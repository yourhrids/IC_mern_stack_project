const menuBar = document.getElementById("bar");
const closeBtn = document.getElementById("close");
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

const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
