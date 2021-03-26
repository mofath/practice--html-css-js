const slides = document.querySelector(".slides");
const slidesLength = document.querySelectorAll(".slides span").length;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

const changImage = () => {
  if (index > slidesLength - 1) {
    index = 0;
  } else if (index < 0) {
    index = slidesLength - 1;
  }
  slides.style.transform = `translateX(${-index * 210}px)`;
};

// event listeners
prevBtn.addEventListener("click", () => {
  index--;
  changImage();
});

nextBtn.addEventListener("click", () => {
  index++;
  changImage();
});

// const clonedElement = document
//   .querySelector("span:nth-last-child(-n+4)")
//   .cloneNode(true);

// $slides.prepend(clonedElement);
// $slides.apend(clonedElement);

// slides.classList.add("animate");
// $slides.style = ("animation-duration", slidesLength * 2 + "s");
