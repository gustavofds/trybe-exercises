const headerContainer = document.getElementById("header-container");

headerContainer.style.backgroundColor = "#2fc18c";
console.log(headerContainer);

const urgenteH3 = document.querySelectorAll(".emergency-tasks h3");

for (let element of urgenteH3) {
  element.style.backgroundColor = "#f72585";
}

const naoUrgenteH3 = document.querySelectorAll(".no-emergency-tasks h3");

for (let element of naoUrgenteH3) {
  element.style.backgroundColor = "black";
}

const urgenteDiv = document.querySelectorAll(".emergency-tasks div");

for (let element of urgenteDiv) {
  element.style.backgroundColor = "#ffd6a5";
}

const naoUrgenteDiv = document.querySelectorAll(".no-emergency-tasks div");

for (let element of naoUrgenteDiv) {
  element.style.backgroundColor = "#fdffb6";
}

document.getElementById("footer-container").style.backgroundColor = "#036b52";
