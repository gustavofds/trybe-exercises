function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function createDays() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const daysList = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerText = day;

    if (
      dayListItem.innerHTML.includes(24) ||
      dayListItem.innerHTML.includes(25) ||
      dayListItem.innerHTML.includes(31)
    ) {
      dayListItem.className += " holiday";
    }

    if (
      dayListItem.innerHTML.includes(4) ||
      dayListItem.innerHTML.includes(11) ||
      dayListItem.innerHTML.includes(18)
    ) {
      dayListItem.className += " friday";
    }

    daysList.append(dayListItem);
  }
}

createDaysOfTheWeek();
createDays();

// Escreva seu código abaixo.
