//DESAFIOS BÔNUS

/* Desafio 11 - Crie a função generatePhoneNumber
Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.

Retorne a string 'Array com tamanho incorreto.' se a função receber um array com tamanho diferente de 11;

Retorne a string 'não é possível gerar um número de telefone com esses valores' caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais.
*/
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

/* Desafio 12 -  Crie a função triangleCheck
A função triangleCheck deverá receber os parâmetros lineA, lineB e lineC com o valor do comprimento de três linhas distintas.

Para que seja possível formar um triângulo, é necessário atender uma das seguintes condições:

A medida de um dos lados é menor que a soma das medidas dos outros dois lados e maior que o valor absoluto (módulo) da diferença entre os outros dois lados. Por exemplo: lineA é menor que lineB + lineC e maior que lineB - lineC. Se o resultado de lineB - lineC for um valor negativo, é preciso convertê-lo em positivo e checar se lineA é maior que esse resultado convertido para positivo;

OU

A medida de qualquer um dos lados é menor que a soma das medidas dos outros dois lados. Por exemplo: lineA é menor que lineB + lineC, lineB é menor que lineA + lineC e lineC é menor que lineA + lineB.

O retorno da sua função deverá ser um booleano.
Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true
*/
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

/* Desafio 13 - Crie a função hydrate 
Implemente a função hydrate que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

-> String recebida:
  '1 cerveja'
-> String retornada:
  '1 copo de água'

-> String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'
-> String retornada:
  '7 copos de água'

-> String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'
-> String retornada:
  '7 copos de água'

Para simplificar, considere que a string sempre terá o formato quantidade (em número) + tipo da bebida;

O número na frente de cada bebida deve estar entre 1 e 9.
*/
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
