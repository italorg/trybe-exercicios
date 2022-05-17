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

// Parte - III - 1
const addKeys = (obj, key, value) => obj[key] = value;
addKeys(lesson2, 'turno', 'noite');

// Parte - III - 2
const objKeys = (obj) => console.log(Object.keys(obj));

// Parte - III - 3
const objLength = (obj) => console.log(Object.keys(obj).length);

// Parte - III - 4
const objValues = (obj) => console.log(Object.values(obj));

// Parte - III - 5
const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

//console.log(allLessons);

// Parte - III - 6
const totalStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// Parte - III - 7
const getValueByNumber = (obj, index) => Object.values(obj)[index];

//console.log(getValueByNumber(lesson1, 0));

// Parte - III - 8
const verifyPair = (obj, key, value) => (key in obj && obj[key] === value ? true : false);

//console.log(verifyPair(lesson3, 'turno', 'noite'));
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus - 1
const mathEstudents = () => {
  let soma = 0;
  for (const keys in allLessons) {
    if (allLessons[keys].materia === 'Matemática') {
      soma += allLessons[keys].numeroEstudantes;
    }
  }
  return soma
}

// Bônus - 2
const createReport = (obj, prof) => {
  const novoObj = {};
  let soma = 0;
  novoObj.professor = prof;
  novoObj.aulas = [];
  for (const keys in obj) {
    if (obj[keys].professor === prof) {
      novoObj.aulas.push(obj[keys].materia);
      soma += obj[keys].numeroEstudantes;
    }
  }
  novoObj.estudantes = soma;
  return novoObj
}

//console.log(createReport(allLessons, 'Maria Clara'))
