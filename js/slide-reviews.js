let offset = 0; // величина сменщения слайдов
let currSlideNum = 1; // номер отображаемого слайдера в текущий момент
const slideLine = document.getElementById("slide-line"); // полоса слайдов
const widthNumber = document.getElementById("slide-screen").offsetWidth; // ширина кадра просмотра на странице
const slide = document.getElementById("slide"); // один слайд
const slideAll = document.querySelectorAll(".slide"); // все слайды из разметки
const slideNav = document.getElementById("slide-nav"); // навигация для слайдов
const slideQuantity = slideAll.length; // количество слайдов
const styleSlideLine = getComputedStyle(slideLine);
const gapslide = parseInt(styleSlideLine.gap); // расстояние между слайдами в полосе слайдов из CSS

console.log("slideLine", slideLine);
console.log("slide", slide);
console.log("widthNumber", widthNumber);
console.log("slideAll", slideAll);

function init() {
  slideAll.forEach((item) => {
    item.style.width = widthNumber + "px";
  }); // утсановить ширину слайдера равной ширине кадра просмотра
}

function changeSlide(e) {
  if (e.target.id === "btn-next" || e.target.id === "arrow-left") {
    offset += widthNumber; // приращение смещения на ширину слайдера
    currSlideNum++; // приращение номера текущего слайдера

    if (currSlideNum > slideQuantity) {
      offset = 0;
      currSlideNum = 1;
    }

    return moveslide(offset, currSlideNum); // переместить слайдер
  }

  if (e.target.id === "btn-prev" || e.target.id === "arrow-right") {
    offset -= widthNumber;
    currSlideNum--;

    if (currSlideNum < 1) {
      offset = widthNumber * (slideQuantity - 1);
      currSlideNum = slideQuantity;
    }

    return moveslide(offset, currSlideNum);
  }

  return;
}

function moveslide(offset, currSlideNum) {
  document.getElementById("current").textContent = currSlideNum; // вывести новое значение текущего слайдера
  slideLine.style.left = -offset - gapslide * (currSlideNum - 1) + "px"; // сместить слайдер
}

init();

slideNav.addEventListener("click", changeSlide);
