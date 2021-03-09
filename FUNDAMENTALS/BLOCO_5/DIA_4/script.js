
const inputBackgroundColor = document.getElementById('background-color');
const inputColor = document.getElementById('text-color');
const inputFontSize = document.getElementById('font-size');
const inputLineHeight = document.getElementById('line-height');
const inputFontFamily = document.getElementById('font-family');

window.onload = function() {
  if (localStorage.backgroundColor) {
    document.body.style.backgroundColor = localStorage.backgroundColor;
  }
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
  localStorage.backgroundColor = inputBackgroundColor.value;
}

function changeColor() {
  document.body.style.color = inputColor.value;
}

function changeFontSize() {
  document.body.style.fontSize = inputFontSize.value;
}

function changeLineHeight() {
  document.body.style.lineHeight = inputLineHeight.value;
}

inputBackgroundColor.addEventListener('change', changeBackgroundColor);
inputColor.addEventListener('change', changeColor);
inputFontSize.addEventListener('change', changeFontSize);
inputLineHeight.addEventListener('change', changeLineHeight);


