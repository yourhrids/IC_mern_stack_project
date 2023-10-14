const navigationbar = document.getElementById("navbar");
const menuBar = document.getElementById("menu-bar");
const closeBtn = document.getElementById("close-btn");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    navigationbar.classList.add("active");
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navigationbar.classList.remove("active");
  });
}

// Remove Menu click in nav-link
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navigationbar = document.getElementById("navbar");
  navigationbar.classList.remove("active");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Add blur header
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// // scroll reveal animation js
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2000,
//   delay: 400,
//   // reset:true. //amnimation true
// });
// sr.reveal(".features, .footer , .form , .call-to-action , .home , .header");
