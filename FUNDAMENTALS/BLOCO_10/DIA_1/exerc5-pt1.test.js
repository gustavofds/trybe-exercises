const { obj1, obj2, obj3 } = require("./exerc5-pt1")


test('Compara igualdade entre obj1 e obj2', () => {
  expect(obj1).toEqual(obj2);
})

test('Compara desigualdade entre obj1 e obj3', () => {
  expect(obj1).not.toEqual(obj3);
})
