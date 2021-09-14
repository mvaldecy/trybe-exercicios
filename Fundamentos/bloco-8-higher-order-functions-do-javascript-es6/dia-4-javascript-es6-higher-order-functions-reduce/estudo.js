/* const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
}; */

/* const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15]
 */

/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113 */

/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

const numbers = [50, 85, -30, 3, 15]; */

/* const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85 */


/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
//somar todos os numeros pares

const getEven = (number) => number % 2 === 0

const sumPair = (acc, curr) => acc + curr;

const SumNumbers = (array) => array.filter(getEven).reduce(sumPair) 

console.log(SumNumbers(numbers))
 */

