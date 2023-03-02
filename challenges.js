// Desafio 1 - Crie a função compareTrue
const compareTrue = (val1, val2) => val1 && val2;

// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
function highestCount(num) {
  let maiorNum = Math.max(...num);
  let qtd = 0;
  for (let n of num) {
    if (n === maiorNum) {
      qtd += 1;
    }
  }
  return qtd;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, heigth) => (base * heigth) / 2;

const calcRectangleArea = (base, heigth) => base * heigth;

function calcAllAreas(base, heigth, form) {
  let result = '';
  if (form === 'triângulo') {
    result = `O valor da área do triângulo é de: ${calcTriangleArea(base, heigth)}`;
  } else if (form === 'retângulo') {
    result = `O valor da área do retângulo é de: ${calcRectangleArea(base, heigth)}`;
  } else {
    result = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return result;
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(mouse - cat1);
  let cat2Dist = Math.abs(mouse - cat2);
  let result = '';
  if (cat1Dist === cat2Dist) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1Dist < cat2Dist) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8 - Crie a função fizzBuzz
const testFizzBuzz = (num, resul) => {
  if (num % 3 === 0 && num % 5 === 0) {
    resul.push('fizzBuzz');
  } else if (num % 3 === 0) {
    resul.push('fizz');
  } else if (num % 5 === 0) {
    resul.push('buzz');
  } else {
    resul.push('bug!');
  }
  return resul;
};

function fizzBuzz(array) {
  let resul = [];
  for (let num of array) {
    testFizzBuzz(num, resul);
  } return resul;
}

// Desafio 9 - Crie a função encode e a função decode
function encode(frase) {
  return frase.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
}

function decode(frase) {
  return frase.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
}

// Desafio 10 - Crie a função techList
function techList(tech, nome) {
  if (tech.length === 0) {
    return [];
  }
  let obj = [];
  for (let t of tech) {
    obj.push({
      tech: t,
      name: nome,
    });
  }
  let result = obj.sort((a, b) => ((a.tech > b.tech) ? 1 : -1));
  return result;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
