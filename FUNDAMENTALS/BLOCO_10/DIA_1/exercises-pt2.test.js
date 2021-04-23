const {
  encode,
  decode,
  techList,
} = require('./exercises-pt2.js');

describe('Testa encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Testa se a,e,i,o,u são convertidas em 1,2,3,4,5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Testa se 1,2,3,4,5 são convertidos em a,e,i,o,u ', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Testa se as demais letras/números não são convertidos', () => {
    expect(encode('gustavo10')).toBe('g5st1v410');
    expect(decode('g5st1v410')).toBe('gustavoa0');
  });

  it('Testa se as strings retornadas têm a mesma length q os parâmetros', () => {
    expect(encode('gustavo10').length).toBe('gustavo10'.length);
    expect(decode('g5st1v410').length).toBe('g5st1v410'.length);
  });
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});