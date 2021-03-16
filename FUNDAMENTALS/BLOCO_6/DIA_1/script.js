const selectDropdown = document.getElementById('state');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');

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

window.onload = function() {
  createStateOptions();
}