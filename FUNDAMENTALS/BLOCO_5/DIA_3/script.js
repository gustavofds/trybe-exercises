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

// 1
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
      dayListItem.innerHTML === "4" ||
      dayListItem.innerHTML.includes(11) ||
      dayListItem.innerHTML.includes(18) ||
      dayListItem.innerHTML.includes(25)
    ) {
      dayListItem.className += " friday";
    }

    daysList.appendChild(dayListItem);
  }
}

// 2
function createHolidaysButton(btnName = "Feriados") {
  const holidayBtn = document.createElement("button");
  holidayBtn.id = "btn-holiday";
  holidayBtn.innerText = btnName;

  document.querySelector(".buttons-container").appendChild(holidayBtn);
}

// 3
function changeHolidaysColor(color) {
  const holidays = document.querySelectorAll(".holiday");

  document.getElementById("btn-holiday").addEventListener("click", function () {
    for (let holiday of holidays) {
      if (holiday.style.backgroundColor === color) {
        holiday.style.backgroundColor = "rgb(238,238,238)";
      } else {
        holiday.style.backgroundColor = color;
      }
    }
  });
}

// 4
function createFridaysButton(btnName = "Sexta-feira") {
  const fridaysBtn = document.createElement("button");
  fridaysBtn.id = "btn-friday";
  fridaysBtn.innerText = btnName;

  document.querySelector(".buttons-container").appendChild(fridaysBtn);
}

// 5
function changeFridaysText(text) {
  const fridays = document.querySelectorAll(".friday");
  const fridayDays = [];
  for (let index = 0; index < fridays.length; index += 1) {
    fridayDays.push(fridays[index].innerText);
  }

  document.getElementById("btn-friday").addEventListener("click", function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerText === text) {
        fridays[index].innerText = fridayDays[index];
      } else {
        fridays[index].innerText = text;
      }
    }
  });
}

// 6
function zoomIn() {
  const days = document.getElementById('days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = 'bolder';
  });  
}

function zoomOut() {
  const days = document.getElementById('days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = 'normal';
  });
}

// 7
function addTask(task) {
  const taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  console.log(taskSpan);
  document.querySelector('.my-tasks').appendChild(taskSpan);
}

// 8
function addSubtitle(color) {
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = color;
  colorDiv.className = 'task';
  document.querySelector('.my-tasks').appendChild(colorDiv);
  
}

// 9
function selectTask() {
  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach(taskDiv => taskDiv.addEventListener('click', function() {
    if (taskDiv.className.includes('selected')) {
      taskDiv.className = 'task';
    } else {
      taskDiv.className = 'task selected';
    }
  }))
}


createDaysOfTheWeek();
createDays();
createHolidaysButton();
changeHolidaysColor("rgb(183, 183, 164)");
createFridaysButton();
changeFridaysText("SEXTA!!!");
zoomIn();
zoomOut();
addTask('Cozinhar');
addSubtitle('red');
selectTask();


