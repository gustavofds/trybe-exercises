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

// 6
const totalStudents = obj => {
  const lessons = Object.keys(obj);
  console.log(lessons);
  let students = 0;
  
  for (const lesson of lessons) {    
    students += obj[lesson].numeroEstudantes;
  }
  return students;
}
console.log(totalStudents(allLessons));

// 7
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const getValueByNumber = (obj, index) => {
  const values = Object.values(obj);
  return values[index];
}

console.log('getValueFromPosition: ', getValueByNumber(lesson1, 0));
// Output: 'Matématica'