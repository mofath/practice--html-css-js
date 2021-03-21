const imgsContainer = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const imgs = document.querySelectorAll("#imgs img");

let index = 0;

const run = () => {
  index++;
  changImage();
};

let interval = setInterval(run, 2000);

const reserInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

const changImage = () => {
  if (index > imgs.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imgs.length - 1;
  }
  imgsContainer.style.transform = `translateX(${-index * 320}px)`;
};

// event listeners
leftBtn.addEventListener("click", () => {
  index--;
  changImage();
  reserInterval();
});

rightBtn.addEventListener("click", () => {
  index++;
  changImage();
  reserInterval();
});
