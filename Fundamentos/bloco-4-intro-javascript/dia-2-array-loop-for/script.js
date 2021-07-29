// exercicios de array e loop for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log ('Resultados')
let separador ='----------------------------------------'
console.log (separador)
console .log ('1ª questão')
/* 1)Nesse primeiro exercício, percorra o array 
imprimindo todos os valores nele contidos com a 
função console.log(); */
for (let i=0;i<numbers.length;i++){
    console.log (numbers[i])
}
console.log(separador)
console.log ('2ª questão')
/* 2) Para o segundo exercício, some todos os valores
contidos no array e imprima o resultado;*/
let soma=0;
for (let i=0;i<numbers.length;i++){
    soma += numbers[i]
}
console.log(soma)
/*Para o terceiro exercício, calcule e imprima 
a média aritmética dos valores contidos no array;*/
console.log(separador)
console.log('3ª questão')
let media =soma/numbers.length
console.log (media)


