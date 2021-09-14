const assert = require('assert');

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
function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((aux) => aux.author.birthYear === 1947).author.name
  }
  
assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.sort((a, b) => a.name.length - b.name.length)
    // Variável nameBook que receberá o valor do menor nome;
    nameBook = books[0].name
    return nameBook;
  }
  
  assert.strictEqual(smallerName(), 'Duna');

  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    // escreva seu código aqui
    return books.find((aux) => aux.name.length === 26)
  }
  
  assert.deepStrictEqual(getNamedBook(), expectedResult);

  const expectedResult2 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
  }
  
  assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);
 
  const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((aux) => aux.author.birthYear > 1800 && aux.author.birthYear < 1899)
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult3);


const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((aux) => aux.releaseYear >= 1980 && aux.releaseYear < 1989 )
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult4);


const expectedResult5 = false;

function authorUnique() {
  return books.every((book) =>
    books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult5);
console.log(authorUnique())
// assert.strictEqual(authorUnique(), expectedResult5);