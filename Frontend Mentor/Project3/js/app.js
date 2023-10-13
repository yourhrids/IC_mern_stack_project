// Single product image select
var mainImage = document.getElementById("mainImg");
var smallImage = document.querySelectorAll("#smallImg");

smallImage.forEach((smallImages, index) => {
  smallImages.addEventListener("click", () => {
    mainImage.src = smallImages.src;
  });
});
