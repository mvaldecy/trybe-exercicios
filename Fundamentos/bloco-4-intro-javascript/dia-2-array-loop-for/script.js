// exercicios de array e loop for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log ('Resultados')
let separador ='----------------------------------------'
console.log (separador)

/* 1)Nesse primeiro exercício, percorra o array 
imprimindo todos os valores nele contidos com a 
função console.log(); */
console.log (separador)
console .log ('1ª questão')
for (let i=0;i<numbers.length;i++){
    console.log (numbers[i])
}

/* 2) Para o segundo exercício, some todos os valores
contidos no array e imprima o resultado;*/
console.log(separador)
console.log ('2ª questão')
let soma=0;
for (let i=0;i<numbers.length;i++){
    soma += numbers[i]
}
console.log(soma)

/* 3)Para o terceiro exercício, calcule e imprima 
a média aritmética dos valores contidos no array;*/
console.log(separador)
console.log('3ª questão')
let media =soma/numbers.length
console.log (media)

/* 4)Com o mesmo código do exercício anterior, 
caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20".
Caso não seja, imprima a mensagem: 
"valor menor ou igual a 20";*/
console.log(separador)
console.log('4ª questão')
if (media > 20){
    console.log('valor maior que 20')
}
else {
    console.log('valor menor que 20')
}

/* 5)Utilizando for , descubra qual 
o maior valor contido no array e imprima-o;
*/
console.log(separador)
console.log('5ª questão')
let maior = 0;
for (let i=0;i<numbers.length;i++){
    if (numbers[i] > maior){
        maior = numbers[i]
    }
}
console.log (maior)
console.log ('referencia: https://pt.stackoverflow.com/a/35204')

/* 6)Descubra quantos valores ímpares existem no
 array e imprima o resultado.
 Caso não exista nenhum, imprima a mensagem:
  "nenhum valor ímpar encontrado"; */
 console.log(separador)
 console.log('6ª questão')
 let i = 0
 let impares =0
 let imparesArr = []
 for (let i=0;i<numbers.length;i++){
     if (numbers[i] % 2 !==0){
         imparesArr.push(numbers[i])
         impares++
     }
 }
console.log('Quantidade de números ímpares: ' + impares)
console.log('Os números ímpares são: ' + imparesArr)

/* 7)Utilizando for , descubra qual o menor valor
 contido no array e imprima-o; */
 console.log(separador)
 console.log('7ª questão')
 let menor = 100000000
 for (let i=0;i<numbers.length;i++){
     if (numbers[i]< menor){
         menor = numbers[i]
     }
 }
console.log (menor)



