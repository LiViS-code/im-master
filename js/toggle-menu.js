const btnMenuSwitch = document.getElementById("toggle-menu");
const mobMenu = document.getElementById("mob-menu");

function toggleClassName() {
  btnMenuSwitch.classList.toggle("active");
  mobMenu.classList.toggle("active");
}

btnMenuSwitch.addEventListener("click", toggleClassName);

mobMenu.addEventListener("click", toggleClassName);
