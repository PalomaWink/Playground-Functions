/* Desafio 1 - Crie a função compareTrue
A função compareTrue ao receber dois parâmetros booleanos deve:
Retornar true se ambos os valores forem verdadeiros;
Retornar false se um ou ambos os parâmetros forem falsos. */
const compareTrue = (val1, val2) => val1 && val2;


/* Desafio 2 - Crie a função splitSentence
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
Exemplo: se a função receber a string 'go Trybe', o retorno deverá ser ['go', 'Trybe'].
 */
const splitSentence = (frase) => frase.split(' ');

/* Desafio 3 - Crie a função concatName 
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.

Exemplo:
Caso o parâmetro passado para a função concatName seja o array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.*/
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

/* Desafio 4 - Crie a função footballPoints 
A função footballPoints recebe o número de vitórias (wins) e o número de empates (ties) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

wins: é o número de vitórias e vale 3 pontos;
ties: é o número de empates e vale 1 ponto.
*/
const footballPoints = (wins, ties) => (wins * 3) + ties;

/* Desafio 5 - Crie a função highestCount 
A função highestCount deve retornar a quantidade de vezes que o maior número se repete dentro do array.

Por exemplo:
Caso o parâmetro seja um array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
*/
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

/* Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
A função calcTriangleArea recebe dois parâmetros, sendo eles, o valor da base (base) e outro da altura (height) de um triângulo qualquer e retorna o cálculo da sua área.

Realize o cálculo da área total do triângulo utilizando a fórmula (base * altura) / 2.
A função calcRectangleArea também recebe 2 parâmetros, sendo eles, o valor da base (base) e outro da altura (height) de um retângulo qualquer e retorna o cálculo da sua área.

Realize o cálculo da área total do retângulo utilizando a fórmula (base * altura).
E, por último, a função calcAllAreas que recebe 3 parâmetros sendo eles, o valor da base (base), o valor da altura (height) e a forma geométrica (form) que eu quero obter o valor da área, podendo ser triângulo ou retângulo.

Se o parâmetro passado em form for "triângulo" o retorno deve ser uma string com o seguinte formato: O valor da área do triângulo é de: valorDaArea.
Se o parâmetro passado em form for "retângulo" o retorno deve ser uma string com o seguinte formato: O valor da área do retângulo é de: valorDaArea.
E caso não seja nenhuma das condições acima, deve retornar uma string com o seguinte formato: Não foi possível fazer o cálculo, insira uma forma geométrica válida.
*/
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

/* Desafio 7 - Crie a função catAndMouse
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:

- `mouse`: representa a posição do rato.
- `cat1`: representa a posição do gato 1;
- `cat2`: representa a posição do gato 2;
Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

Retorne a string 'cat2' se o gato cat2 estiver mais próximo do rato;
Retorne a string 'cat1' se o gato cat1 estiver mais próximo do rato;
Retorne a string 'os gatos trombam e o rato foge' caso os gatos estejam na mesma distância do rato.

*/
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

/* Desafio 8 - Crie a função fizzBuzz
A função fizzBuzz recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

Retorne a string 'fizz' para cada número do array que seja divisível apenas por 3;
Retorne a string 'buzz' para cada número do array que seja divisível apenas por 5;
Retorne a string 'fizzBuzz' para cada número do array que seja divisível por 3 e 5;
Retorne a string 'bug!' para cada número do array que não seja dividido por 3 nem por 5.
*/
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

/* Desafio 9 - Crie a função encode e a função decode
Para codificar a frase utilize a função encode que recebe uma string como parâmetro e deverá trocar todas as vogais minúsculas por números, de acordo com o formato:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja 'hi there!', o retorno deverá ser 'h3 th2r2!'.

Para decodificar a frase utilize a função decode que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os números por vogais minúsculas, de acordo com o formato:

1 -> a
2 -> e
3 -> i
4 -> o
5 -> u

Por exemplo, caso o parâmetro de decode seja 'h3 th2r2!', o retorno deverá ser 'hi there!'.
*/
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

/* Desafio 10 - Crie a função techList
A função techList recebe dois parâmetros:

Um array com nomes de tecnologias ;
Um nome referente ao nome de uma pessoa.
A função deverá retornar:

Um array vazio caso não receba nenhum parâmetro;
Um array de objetos, contendo um objeto para cada tecnologia do array, com a seguinte estrutura:
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
Por exemplo, se a função recebe os parâmetros ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'] e 'Lucas', o retorno deve ser:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
*/
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
