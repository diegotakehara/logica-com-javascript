
/* Condicionais
Exercicio 1:  Verificar se o numero é divisivel por 13, ou seja, se dividir o numero por 13 da resto zero:
*/

const div13 = 27

if (div13 % 13 == 0) {
  console.log("eh divisivel por 13")
} else {
  console.log("nao eh divisivel por 13")
}
/* 
Resposta josé:  
*/
const divisor = 13
const num1 = 27
const equacao = num1 % divisor

console.log("Equacao", equacao)

if (equacao == 0) {
  console.log ("É divisível")
}

else {
  console.log ("Não é divisível")    
  }

/* Condicionais
Exercicio 2: Considerando que todos meses possuem 30 dias, dado uma quantidade de dias, dizer em qual mes esse dia vai cair. obs usar Math.floor() para arredondar o numero do mês - ex Math.floor(11.20) vai retornar "11".
*/

const dias = 360

let mes = (dias / 30)

if (mes <= 1) {
  console.log("janeiro")
} else if (mes <= 2) {
  console.log("fevereiro")
} else if (mes <= 3) {
  console.log("março")
} else if (mes <= 4) {
  console.log("abril")
} else if (mes <= 5) {
  console.log("maio")
} else if (mes <= 6) {
  console.log("junho")
} else if (mes <= 7) {
  console.log("julho")
} else if (mes <= 8) {
  console.log("agosto")
} else if (mes <= 9) {
  console.log("setembro")
} else if (mes <= 10) {
  console.log("outubro")
} else if (mes <= 11) {
  console.log("novembro")
} else if (mes <= 12) {
  console.log("dezembro")
} else {
  console.log ('"Digite um numero de dias que esteja no intervalo de um ano (1 a 360)"')
}

/* 
Resposta josé:  
*/

const diasJose = 70
const qtMeses = Math.floor(diasJose/30)
const qtDiasTotal = qtMeses * 30
const diasPassados = diasJose - qtDiasTotal
console.log (diasPassados)
