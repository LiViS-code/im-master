let offset = 0; // величина сменщения слайдов
let currSliderNumn = 1; // номер отображаемого слайдера в текущий момент
const sliderLine = document.querySelector(".slider-line"); // полоса слайдов
const widthNumber = document.querySelector(".review-cards-wrap").offsetWidth; // ширина кадра просмотра на странице
const slider = document.querySelector(".slider"); // один слайд
const sliderAll = document.querySelectorAll(".slider"); // все слайды из разметки
const btnNext = document.querySelector(".btn-next"); // кнопка следующий слайд
const btnPrev = document.querySelector(".btn-prev"); // кнопка предыдущий слайд
const sliderQuantity = sliderAll.length; // количество слайдов
const styleSliderLine = getComputedStyle(sliderLine);
const gapSlider = parseInt(styleSliderLine.gap); // расстояние между слайдами в полосе слайдов из CSS

function init() {
  sliderAll.forEach((item) => {
    item.style.width = widthNumber + "px";
  }); // утсановить ширину слайдера равной ширине кадра просмотра
}

function nextSlider() {
  offset += widthNumber; // приращение смещения на ширину слайдера
  currSliderNumn++; // приращение номера текущего слайдера

  if (currSliderNumn > sliderQuantity) {
    offset = 0;
    currSliderNumn = 1;
  }

  moveSlider(offset, currSliderNumn); // переместить слайдер
}

function prevSlider() {
  offset -= widthNumber;
  currSliderNumn--;

  if (currSliderNumn < 1) {
    offset = widthNumber * (sliderQuantity - 1);
    currSliderNumn = sliderQuantity;
  }

  moveSlider(offset, currSliderNumn);
}

function moveSlider(offset, currSliderNumn) {
  document.getElementById("current").textContent = currSliderNumn; // вывести новое значение текущего слайдера
  sliderLine.style.left = -offset - gapSlider * (currSliderNumn - 1) + "px"; // сместить слайдер
}

init();

btnNext.addEventListener("click", nextSlider);

btnPrev.addEventListener("click", prevSlider);
