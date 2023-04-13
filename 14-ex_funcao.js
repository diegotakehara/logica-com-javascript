//AULA 20 - Crie um fatorial de um numero utilizando funções e for para criacao do algoritmo:

function fatorial (n) {
  //let i = n // i = 2
  let fatorial = 1 // se começar por 0, multiplica por 0
  while (n >= 2) { // multiplicar por 1 nao altera
    fatorial = fatorial * n
    n--
  }
return fatorial
}

const number = 5
const resposta = fatorial(number)
console.log(resposta)