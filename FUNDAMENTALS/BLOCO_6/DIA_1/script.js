const selectDropdown = document.getElementById('state');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const mainSection = document.getElementsByTagName('main')[0];
const inputFields = ['name',  'email',  'cpf', 'address', 'city', 'state',  'resume-abstract', 'job-position', 'job-description', 'date'];

const statesOfBrazil = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

function isEmailValid() {
  if (emailInput.value.includes('@')) {
    return true;
  }

  return false;
}

function createStateOptions() {
  for (let index = 0; index < statesOfBrazil.length; index += 1) {  
    const optionValue = Object.entries(statesOfBrazil[index])[0][0];  
    const optionText = Object.entries(statesOfBrazil[index])[0][1];  
    const optionTag = document.createElement('option');
    optionTag.innerText = optionText;
    optionTag.setAttribute('value', optionValue);
    selectDropdown.appendChild(optionTag);
  }
}

function checkDay(day) {
  if (Number(day) <= 0 || Number(day) > 31 || isNaN(Number(day))) {
    alert('Dia inválido!')
    return false;
  }
  return true;  
}

function checkMonth(month) {
  if (Number(month) <= 0 || Number(month) > 12 || isNaN(Number(month))) {
    alert('Mês inválido!')
    return false;
  }
  return true;
}

function checkYear(year) {
  if (year.length !== 4 || Number(year) > 2021 || isNaN(Number(year))) {
    alert('Ano inválido!')
    return false;
  }
  return true;
}

function isDateValid() {
  if (!dateInput.value.includes('/')) {
    return false;
  }

  const splicedInput = dateInput.value.split('/');
  if (splicedInput.length !== 3) {
    return false;
  }

  const daySpliced = splicedInput[0];
  const monthSpliced = splicedInput[1];
  const yearSpliced = splicedInput[2];
  if(!checkDay(daySpliced)) return false;
  if(!checkMonth(monthSpliced)) return false;
  if(!checkYear(yearSpliced)) return false;

  console.log(daySpliced,monthSpliced,  yearSpliced);
  return true;
}

function createDiv() {
  const resumeDiv = document.createElement('div');

}

function createDiv() {
  const resumeDiv = document.createElement('div');
  resumeDiv.id = 'resume';
  
  const inputValues = inputFields.map(el => document.getElementById(el).value);

  inputValues.forEach(data => resumeDiv.innerHTML += `${data}<br>`)  
  
  mainSection.appendChild(resumeDiv);
}

function submission(e) {
  e.preventDefault(); // Retirar se utilizarmos GET ou Post

  if (!isEmailValid()) {
    // e.preventDefault();
    alert('E-mail Inválido ❌');
  } else if (!isDateValid()) {
    // e.preventDefault();
    alert('Data Inválida ❌ Utilize o formato DD/MM/AAAA');
  } else {
    createDiv();
  }
}

function clearForm(e) {
  e.preventDefault;
  const inputValues = inputFields.map(el => document.getElementById(el).value = '');
  const resumeDiv = document.getElementById('resume');
  if(resumeDiv) {
    resumeDiv.innerHTML = '';
  }
}

window.onload = function() {
  createStateOptions();
}

submitBtn.addEventListener('click', submission);
clearBtn.addEventListener('click', clearForm);