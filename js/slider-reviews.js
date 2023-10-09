let offset = 0; // величина сменщения слайдов
let currSliderNum = 1; // номер отображаемого слайдера в текущий момент
let widthNumber; // ширина кадра просмотра на странице
const sliderLine = document.getElementById("slider-line"); // полоса слайдов
const slider = document.getElementById("slider"); // один слайд
const sliderAll = document.querySelectorAll(".slider"); // все слайды из разметки
const sliderNav = document.getElementById("slider-nav"); // навигация для слайдов
const sliderQuantity = sliderAll.length; // количество слайдов
const styleSliderLine = getComputedStyle(sliderLine);
const gapSlider = parseInt(styleSliderLine.gap); // расстояние между слайдами в полосе слайдов из CSS

function init() {
  widthNumber = document.getElementById("slider-screen").offsetWidth;

  sliderLine.style.width =
    (widthNumber + gapSlider) * sliderAll.length - gapSlider + "px";

  sliderAll.forEach((item) => {
    item.style.width = widthNumber + "px";
  }); // утсановить ширину слайда равной ширине кадра просмотра

  if (currSliderNum === 1) {
    offset = 0;
  }

  if (currSliderNum > 1) {
    offset = widthNumber + gapSlider * (currSliderNum - 1);
  }

  if (currSliderNum === sliderQuantity) {
    offset = (widthNumber + gapSlider) * (sliderQuantity - 1);
  }

  changeSlider();
}

function changeSlider(e) {
  if (!e) {
    return moveSlider();
  }

  if (e.target.id === "btn-next" || e.target.id === "arrow-left") {
    if (currSliderNum > 1) {
      offset += widthNumber + gapSlider * (currSliderNum - 1); // смещение с учетом интервалов между слайдерами
    } else if (currSliderNum === 1) {
      offset += widthNumber + gapSlider * currSliderNum;
    }

    currSliderNum++; // приращение номера текущего слайдера

    if (currSliderNum > sliderQuantity) {
      offset = 0;
      currSliderNum = 1;
    }

    return moveSlider(); // переместить слайдер
  }

  if (e.target.id === "btn-prev" || e.target.id === "arrow-right") {
    if (currSliderNum < sliderQuantity) {
      offset -= widthNumber + gapSlider * (currSliderNum - 1);
    } else if (currSliderNum === sliderQuantity) {
      offset -= widthNumber + gapSlider;
    }

    currSliderNum--;

    if (currSliderNum < 1) {
      offset = (widthNumber + gapSlider) * (sliderQuantity - 1);
      currSliderNum = sliderQuantity;
    }

    return moveSlider();
  }

  return;
}

function moveSlider() {
  document.getElementById("current").textContent = currSliderNum; // вывести новое значение текущего слайдера
  sliderLine.style.transform = "translateX(-" + offset + "px)"; // сместить слайдер
}

init();

sliderNav.addEventListener("click", changeSlider);

window.addEventListener("resize", init);
