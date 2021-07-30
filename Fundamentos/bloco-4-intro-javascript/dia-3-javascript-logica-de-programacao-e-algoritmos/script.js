console.log ('Resultados')
let separador = '----------------------------------------'
console.log (separador)

/* 1)faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de 
asteriscos de lado de tamanho n */
console.log('1ª questão')
let quadrado ='';
let tamanho = 5;
for (let i = 0; i < tamanho; i++ ){
    for (let j = 0; j < tamanho; j++){
        quadrado += '*'
    }
    quadrado += '\n'
}
console.log('n = ' + tamanho)
console.log(quadrado)

/* 2) Para o segundo exercício, 
faça o mesmo que antes, mas que imprima um triângulo 
retângulo com 5 asteriscos de base. */
console.log(separador)
console.log ('2ª questão')
let triangulo = '';
for (let i = 0; i < tamanho; i++){
    for (let j = 0 ; j < tamanho; j++){
        if (j>i){
            triangulo += ' ';
        } else {
            triangulo += '*'
        }
    }
    triangulo += '\n'
}
console.log (triangulo)