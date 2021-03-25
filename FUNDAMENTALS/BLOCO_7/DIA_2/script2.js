// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 
function addTurn(obj, newKey, value) {
  obj[newKey] = value;
  return obj;
}

console.log(addTurn(lesson2, 'turno', 'manhã'));

// 2
function listKeys(obj) {
  const keys = Object.keys(obj)  
  keys.forEach(key => console.log(key));
   
   return keys;  
}

console.log(listKeys(lesson3));

// 3
const objectSize = obj => Object.keys(obj).length;
console.log(objectSize(lesson1));

// 4
const listValues = obj => Object.values(obj);
console.log(listValues(lesson3));

// 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
