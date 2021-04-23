const { 
  sum, 
  myRemove, 
  myRemoveWithoutCopy,
  myFizzBuzz
 } = require('./exercises-pt1');

describe('Exercicio 1 - testa sum', () => {
  test('Testa se sum 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('Testa se sum 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Testa se sum lança erro quando parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('Testa se a mensagem de erro é parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
})

describe('Exercicio 2 - testa myRemove', () => {
  it('Verifica se remove o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica não retorna [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    const testArr = [1, 2, 3, 4];
    expect(myRemove(testArr, 3)).not.toEqual(testArr);
  });

  it('Verifica se retorna array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Exercicio 3 - testa myRemoveWithoutCopy', () => {
  it('Verifica se remove o 3', () => {
    const testArr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(testArr, 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se não retorna a mesma array', () => {
    const testArr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(testArr, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    const testArr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(testArr, 3)).toEqual(testArr);
  });

  it('Verifica se retorna o array esperado', () => {    
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Testa funcao myFizzBuzz', () => {
  test('Verifica se retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Verifica se retorna fizz (div por 3)', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Verifica se retorna buzz (div por 5)', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Verifica se retorna o proprio numero', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test('Verifica se retorna falso', () => {
    expect(myFizzBuzz('abacate')).toBe(false);
  });
})

