// array.reduce(acc, curr)

const numbers = [32, 15, 3, 2, -5, 56, 10];

let sum = 0;
for (let i in numbers){
    sum += numbers[i]
}
//console.log(sum)
const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
//console.log(sumNumbers); // 113

// Ou seja:
/*
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

*/

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((result, curr) => result.concat(curr))

}
console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);