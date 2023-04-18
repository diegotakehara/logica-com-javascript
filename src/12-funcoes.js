//AULA 18 - funcoes sao acoes executadas assim que chamadas, ou em decorrencia de algum evento
function ola () { 
  console.log("Olá!")
}
//para imprimir 3x
ola()
ola()
ola()


function soma (A, B) {
  return A + B
}

function subtracao (A, B) {
  return A - B
}
/*
function calculadora () {
  const R = soma(10, 20)
  return R
}
*/
//const resultado = calculadora()
//console.log(resultado)

//agora chamando pelo tipo

function calculadora (tipo) {
  const A = 1
  const B = 2
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
}

const resultado = calculadora("subtracao")
console.log(resultado)

// verifique se o numero é par

function par (num) {
  return num % 2 === 0
}

const ePar = par(3)
console.log(ePar)

// mostrar n pares de 0 a 100

for (let i = 0; i <= 100; i++) {
  if (par(i)) console.log(i)
}
