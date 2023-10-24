const navMenu = document.getElementById("mainmenu");
const hamburgBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");

if (hamburgBtn) {
  hamburgBtn.addEventListener("click", () => {
    navMenu.classList.add("add-class");
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("add-class");
  });
}
