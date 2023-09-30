let offset = 0;
let currSliderNumn = 1;
const sliderLine = document.querySelector(".slider-line");
const widthNumber = document.querySelector(".review-cards-wrap").offsetWidth;
const slider = document.querySelector(".slider");
const sliderAll = document.querySelectorAll(".slider");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const sliderQuantity = sliderAll.length;

function init() {
  sliderAll.forEach((item) => {
    item.style.width = widthNumber + "px";
  });
}

init();

btnNext.addEventListener("click", () => {
  offset += widthNumber;
  currSliderNumn += 1;

  if (currSliderNumn > sliderQuantity) {
    offset = 0;
    currSliderNumn = 1;
  }

  document.getElementById("current").textContent = currSliderNumn;
  sliderLine.style.left = -offset + "px";
});

btnPrev.addEventListener("click", () => {
  offset -= widthNumber;
  currSliderNumn -= 1;

  if (currSliderNumn < 1) {
    offset = widthNumber * (sliderQuantity - 1);
    currSliderNumn = sliderQuantity;
  }

  document.getElementById("current").textContent = currSliderNumn;
  sliderLine.style.left = -offset + "px";
});
