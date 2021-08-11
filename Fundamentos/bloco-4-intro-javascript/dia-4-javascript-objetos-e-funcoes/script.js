// parte 1 - Obejetor e For/in
let separador = '-----------------------';
console.log ('Parte 1 - Objetos e For/in')

console.log ('1ª questão')

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log (`Bem vinda, ` + info.personagem)

  console.log (separador)
  console.log ('2ª questão')
  info['recorrente'] = 'Sim'
  console.table(info)
 
  console.log(separador)

  console.log('3ª questão')
  for (let i in info) {
      console.log (i)
  }

  console.log(separador)

  console.log('4ª questão')

  for (let i in info){
      console.log (info[i])
  }

  console.log (separador)
  console.log('5ª questão')

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (let i in info && info2) {
      console.log (info[i] +' e '+ info2[i])
      
    }
console.log (separador)
console.log ('Parte 2 - Funções')
console.log ('1ª questão')
let string =''

function verificaPalindromo (string) {
    aux = string
    aux.reverse()
    console.log(aux)
}
verificaPalindromo(string)
