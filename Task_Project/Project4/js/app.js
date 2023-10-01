/* ADD event on multiple elements*/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/* Navbar toggle for mobile*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const toggleNAV = function () {
  navbar.classList.toggle("active");
};
addEventOnElements(navToggler, "click", toggleNAV);




/* Header scroll effect active */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});


// // Testimonial

// const btn= document.getElementsByClassName("testi-btn");
// const slide = document.getElementById("slide");

// btn[0].addEventListener("click", ()=>{
//   slide.style.transform = "translateX(0px)";
// })
// btn[1].addEventListener("click", ()=>{
//   slide.style.transform = "translateX(-800px)";
// })
// btn[2].addEventListener("click", ()=>{
//   slide.style.transform = "translateX(-1600px)";
// })
// btn[3].addEventListener("click", ()=>{
//   slide.style.transform = "translateX(-2400px)";
// })

// carousel js call

$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true, 
    });
  });




// scroll to top by javascript
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
