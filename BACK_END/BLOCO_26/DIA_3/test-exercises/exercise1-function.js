function getNumberClassification (number) {
  if(number < 0) return 'negativo';
  if(number > 0) return 'positivo';
  return 'neutro';
};

module.exports = getNumberClassification;
