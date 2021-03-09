
const inputBackgroundColor = document.getElementById('background-color');
const inputColor = document.getElementById('text-color');
const inputFontSize = document.getElementById('font-size');
const inputLineHeight = document.getElementById('line-height');
const inputFontFamily = document.getElementById('font-family');

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
}

function changeColor() {
  document.body.style.color = inputColor.value;
}

inputBackgroundColor.addEventListener('change', changeBackgroundColor);
inputColor.addEventListener('change', changeColor);


