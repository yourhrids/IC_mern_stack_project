//show menu
const navbar = document.getElementById("nav-bar");
const toggleBar = document.getElementById("toggle-menu");
const closebtn = document.getElementById("close-btn");
const navLink = document.getElementById("nav-link");
if (toggleBar) {
  toggleBar.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
  });
}
if (closebtn) {
  closebtn.addEventListener("click", () => {
    navbar.classList.remove("show-menu");
  });
}
if (navLink) {
  navLink.addEventListener("click", () => {
    navbar.classList.remove("show-menu");
  });
}

// header scroll effect
const linkActive = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("header-effect")
    : header.classList.remove("header-effect");
};
window.addEventListener("scroll", linkActive);

// Counter
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        (current += increment), (obj.textContent = current);
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count", 0, 350, 4000);
});

// scroll to top
var scrollBtn = document.getElementsByClassName("scroll-to-top")[0];
window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = "block";
  } else if (this.document.documentElement.scrollTop < 500) {
    scrollBtn.style.display = "none";
  }
});
function scrolltoTop() {
  document.documentElement.scrollTop = 0;
}
