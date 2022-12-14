function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const daysList = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const day = document.createElement('li');
  day.innerText = decemberDaysList[index];
  day.className = 'day';
  if (day.innerText == 24 || day.innerText == 25 || day.innerText == 31) {
    day.className += ' holiday';
  }
  if (day.innerText == 4 || day.innerText == 11 || day.innerText == 18 || day.innerText == 25) {
    day.className += ' friday'
  }
  daysList.appendChild(day);
}

const buttonsContainer = document.querySelector('.buttons-container');

function createHolidayButton(texto) {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = texto;
  btnHoliday.id = 'btn-holiday';
  buttonsContainer.appendChild(btnHoliday);
}
createHolidayButton('Feriados');

const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', bgColorHelidays);
function bgColorHelidays() {
  let day = document.getElementsByClassName('holiday');
  for (let index = 0; index < day.length; index += 1) {
    day[index].style.backgroundColor = 'rgba(0, 128, 0, 0.404)';
    day[index].style.color = '#008000'
  }
}

function createFridayButton(texto) {
  let fridayButton = document.createElement('button');
  fridayButton.innerText = texto;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', sextou);
function sextou() {
  let day = document.getElementsByClassName('friday');
  for (let index = 0; index < day.length; index += 1) {
    day[index].innerText = 'Sextouu!!!'
  }
}

const zoomInDay = document.getElementsByClassName('day');

for (let index = 0; index < zoomInDay.length; index += 1) {
  let day = zoomInDay[index];
  day.addEventListener('mouseover', zoomDay);
  day.addEventListener('mouseleave', zommOutDay)
  function zoomDay() {
    day.style.fontSize = '23px';
    day.style.fontWeight = 600;
    day.style.backgroundColor = '#ddd';
  }
  function zommOutDay() {
    day.style.fontSize = '20px';
    day.style.fontWeight = 500;
    day.style.backgroundColor = '#eee';
  }
}

const myTasks = document.querySelector('.my-tasks');

function newMyTask(nomeTarefa) {
  let newTask = document.createElement('span');
  newTask.innerText = nomeTarefa;
  myTasks.appendChild(newTask);
}

function makeLegendTask(cor) {
  let legend = document.createElement('div');
  legend.className = 'task';
  legend.style.backgroundColor = cor;
  myTasks.appendChild(legend);
}

function createTaksAndLegendColor(nomeTarefa, cor) {
  newMyTask(nomeTarefa);
  makeLegendTask(cor);
}
createTaksAndLegendColor('Projeto', 'green');
createTaksAndLegendColor('Consulta', 'blue');

let taskLegend = document.getElementsByClassName('task');
for (let index = 0; index < taskLegend.length; index += 1) {
  let selectTask = taskLegend[index];
  selectTask.addEventListener('click', function() {
    if (selectTask.className === 'task') {
      for (let index = 0; index < taskLegend.length; index += 1) {
        if (taskLegend[index] != selectTask) {
          taskLegend[index].className = 'task';
        }
      }
      selectTask.className = 'task selected';
    } else if (selectTask.className === 'task selected') {
      selectTask.className = 'task';
    }
  })
}


for (let index = 0; index < zoomInDay.length; index += 1) {
  let day = zoomInDay[index];
  day.addEventListener('click', coloringDateWithLegendColor);
  
  function coloringDateWithLegendColor() {
    let taskSelected = document.querySelector('.selected');
    if (taskSelected) {
      if (day.style.color != taskSelected.style.backgroundColor) {
        day.style.color = taskSelected.style.backgroundColor;
      } else if (day.style.color === taskSelected.style.backgroundColor) {
        day.style.color = 'rgb(119,119,119)';
      }
    }

  }
}

const inputCommitments = document.getElementById('task-input');
const btnAddCommitments = document.getElementById('btn-add');
const listCommitments = document.querySelector('.task-list');
btnAddCommitments.innerText = 'Adicionar compromisso'

btnAddCommitments.addEventListener('click', addCommitments);
function addCommitments() {
  if (inputCommitments.value === '') {
    alert('Preencha o campo para adicionar compromissos.');
  } else {
    let commitmentAdded = document.createElement('li');
    commitmentAdded.innerText = inputCommitments.value;
    listCommitments.appendChild(commitmentAdded);
    inputCommitments.value = '';
  }
}