const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeContentToFile = require('../exercise4-function');

describe('Testa função writeContentToFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Ao ser chamada com o nome do arquivo e conteudo, a função', () => {
    it('Ao concluir a escrita, retorna uma string', () => {
      const result = writeContentToFile('./fileWritten.txt', 'Xablau!!');
      expect(result).to.be.a('string');
    });

    it('Retorna um ok', () => {
      const result = writeContentToFile('./fileWritten.txt', 'Xablau!!');
      expect(result).to.be.equals('ok');
    });
  })

});