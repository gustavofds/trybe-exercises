
const inputBackgroundColor = document.getElementById('background-color');
const inputColor = document.getElementById('text-color');
const inputFontSize = document.getElementById('font-size');
const inputLineHeight = document.getElementById('line-height');
const inputFontFamily = document.getElementById('font-family');

window.onload = function() {
  if (localStorage.backgroundColor) {
    document.body.style.backgroundColor = localStorage.backgroundColor;
  } 

  if (localStorage.color) {
    document.body.style.color = localStorage.color;
  }

  if (localStorage.fontSize) {
    document.body.style.fontSize = localStorage.fontSize;
  }

  if (localStorage.lineHeight) {
    document.body.style.lineHeight = localStorage.lineHeight;
  }

  if (localStorage.fontFamily) {
    document.body.style.fontFamily = localStorage.fontFamily;
  }
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = inputBackgroundColor.value;
  localStorage.backgroundColor = inputBackgroundColor.value;
}

function changeColor() {
  document.body.style.color = inputColor.value;
  localStorage.color = inputColor.value;
}

function changeFontSize() {
  document.body.style.fontSize = inputFontSize.value;
  localStorage.fontSize = inputFontSize.value;
}

function changeLineHeight() {
  document.body.style.lineHeight = inputLineHeight.value;
  localStorage.lineHeight = inputLineHeight.value;
}

function changeFontFamily() {
  document.body.style.fontFamily = inputFontFamily.value;
  localStorage.fontFamily = inputFontFamily.value;
}

inputBackgroundColor.addEventListener('change', changeBackgroundColor);
inputColor.addEventListener('change', changeColor);
inputFontSize.addEventListener('change', changeFontSize);
inputLineHeight.addEventListener('change', changeLineHeight);
inputFontFamily.addEventListener('change', changeFontFamily);


