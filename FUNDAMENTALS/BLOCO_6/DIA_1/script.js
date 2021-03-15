const selectDropdown = document.getElementById('state');

const statesOfBrazil = ['Acre', 
  'Alagoas', 
  'Amapá', 
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins']

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  const optionTag = document.createElement('option');
  optionTag.innerText = statesOfBrazil[index];
  selectDropdown.appendChild(optionTag);
}