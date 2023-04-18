//AULA 19 - uma forma de criar funções de maneira mais enxuta usando constantes
function ola () {
  console.log("Ola!")
}

ola()

const arrow = () => {
  console.log("Ola2!")
}

arrow ()


const soma = (A, B)/* obrigatoriedade de () quando mais de 1 parametro*/ => A + B
const ePar = num/*(num) é opcional quando apenas 1 parametro*/ => num % 2 === 0
console.log(soma(10, 20))
console.log(ePar(2))
console.log(ePar(3))
