// let imgSlider = document.querySelector("");
let allImagesInnerSlider = document.querySelectorAll(
  ".right-div .img-slider .img-holder"
); // Arrays
let nextBtn = document.querySelector(".slider-btn .f-center .btn-r");
let prevBtn = document.querySelector(".slider-btn .f-center .btn-l");
let banner = document.querySelectorAll(".images-active .outer .inner"); // Arrays
let next = document.querySelector(".test-container .slide-btn .btn-r");
let left = document.querySelector(".test-container .slide-btn .btn-l");
let test = document.querySelectorAll(".test-container .test-card"); // Arrays

let activeImageIndex = 0;

nextBtn.addEventListener("click", () => {
  console.log("next button is clicked");
  if (activeImageIndex < 2 && activeImageIndex >= 0) {
    activeImageIndex++;
  } else {
    activeImageIndex = 0;
  }
  console.log("Increased to : " + activeImageIndex);
  allImagesInnerSlider.forEach((img) => {
    img.classList.remove("active");
  });
  banner.forEach((banner) => {
    banner.classList.remove("active");
  });
  allImagesInnerSlider[activeImageIndex].classList.add("active");
  banner[activeImageIndex].classList.add("active");
});

prevBtn.addEventListener("click", function () {
  console.log("prev button is clicked");
  if (activeImageIndex === 0) {
    activeImageIndex = 2;
  } else {
    activeImageIndex--;
  }
  console.log("Decreased to :" + activeImageIndex);
  allImagesInnerSlider.forEach((img) => {
    img.classList.remove("active");
  });
  banner.forEach((banner) => {
    banner.classList.remove("active");
  });
  allImagesInnerSlider[activeImageIndex].classList.add("active");
  banner[activeImageIndex].classList.add("active");
});

filter.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
