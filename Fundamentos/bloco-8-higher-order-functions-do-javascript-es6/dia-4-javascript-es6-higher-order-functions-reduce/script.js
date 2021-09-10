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
//--------------------------------------------------------------


const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  /* return books
  .map((author) => author.author.name + ', ')
  .reduce((result, curr) => result += curr) */
  const names = books.reduce((acc, book, index, array) => {
      if (index === array.length -1) return `${acc} ${book.author.name}.`;
      return `${acc} ${book.author.name},`
  }, '');
  return names.trim()
}
console.log (reduceNames())
assert.strictEqual(reduceNames(), expectedResult);

//---------------------------------------------

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
      sum + (book.releaseYear - book.author.birthYear)
  ), 0)
    return sumOfAges / numberOfBooks;
}


assert.strictEqual(averageAge(), expectedResult3);