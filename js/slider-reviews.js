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
    (widthNumber + gapSlider - 1) * sliderAll.length + "px";
  sliderAll.forEach((item) => {
    item.style.width = widthNumber + "px";
  }); // утсановить ширину слайда равной ширине кадра просмотра
}

function changeSlider(e) {
  if (!e) {
    offset = 0;
    currSliderNum = 1;
    return moveSlider(offset, currSliderNum);
  }

  if (e.target.id === "btn-next" || e.target.id === "arrow-left") {
    offset += widthNumber; // приращение смещения на ширину слайдера
    currSliderNum++; // приращение номера текущего слайдера

    if (currSliderNum > sliderQuantity) {
      offset = 0;
      currSliderNum = 1;
    }

    return moveSlider(offset, currSliderNum); // переместить слайдер
  }

  if (e.target.id === "btn-prev" || e.target.id === "arrow-right") {
    offset -= widthNumber;
    currSliderNum--;

    if (currSliderNum < 1) {
      offset = widthNumber * (sliderQuantity - 1);
      currSliderNum = sliderQuantity;
    }

    return moveSlider(offset, currSliderNum);
  }

  return;
}

function moveSlider(offset, currSliderNum) {
  document.getElementById("current").textContent = currSliderNum; // вывести новое значение текущего слайдера
  sliderLine.style.left = -offset - gapSlider * (currSliderNum - 1) + "px"; // сместить слайдер
}

init();

sliderNav.addEventListener("click", changeSlider);

window.addEventListener("resize", init);
