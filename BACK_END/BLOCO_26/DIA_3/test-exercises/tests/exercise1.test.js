const { expect } = require('chai');
const getNumberClassification = require('../exercise1-function');

describe('Testa a função getNumberClassification', () => {
  describe('Quando o recebe um número como parâmetro', () => {
    it('Retorna uma string como resposta', () => {
      const result = getNumberClassification(1);
      expect(result).to.be.a('string');
    });
  });

  describe('Quando o número passado for maior que 0', () => {
    it('Retorna "positivo"', () => {
      const result = getNumberClassification(10);
      expect(result).to.be.equals('positivo');
    });
  });

  describe('Quando o número passado for menor que 0', () => {
    it('Retorna "negativo"', () => {
      const result = getNumberClassification(-10);
      expect(result).to.be.equals('negativo');
    });
  });

  describe('Quando o número passado for igual a 0', () => {
    it('Retorna "neutro"', () => {
      const result = getNumberClassification(0);
      expect(result).to.be.equals('neutro');
    });
  });
});
