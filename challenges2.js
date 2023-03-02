// Desafio 11 - Crie a função generatePhoneNumber
function valLength(array) {
  if (array.length !== 11) {
    return true;
  }
}

function valSize(array) {
  for (const num of array) {
    if (num < 0 || num > 9) {
      return true;
    }
  }
}

function valCount(array) {
  let numCounts = {};
  for (const num of array) {
    numCounts[num] = (numCounts[num] || 0) + 1;
    if (numCounts[num] >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  if (valLength(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (valSize(array) || valCount(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let str = array.toString().replaceAll(',', '');
  let numDeTel = `(${str.substring(0, 2)}) ${str.substring(2, 7)}-${str.substring(7)}`;
  return numDeTel;
}

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}
// Desafio 13 - Crie a função hydrate
function hydrate(string) {
  let regex = /\d+/g;
  let result = string.match(regex);
  let soma = 0;
  for (let n of result) {
    soma += parseInt(n, 10);
  }
  return soma > 1 ? `${soma} copos de água` : `${soma} copo de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
