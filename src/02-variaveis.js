var primeira_variavel = "esta é uma frase"
console.log(primeira_variavel)
/*
TIPOS DE VARIAVEIS:
STRING
NUMBER
BOOLEAN
UNDEFINED
NULL 
hoje nao se usa mais VAR, apenas em js puro, 
nas bibliotecas usaremos apenas let e const.
o let pode ter o valor alterado != de const 
pode-se usar "" '' e `` para strings
para nºs decimais, usar sempre a separação por ponto
boolean = true/false
temos tambem as variaveis do tipo undefined (sem valor definido) e null (voce escolheu que a var nao tenha valor)
*/
const pi = 3.14
let variavel = "esta eh minha frase"
console.log(pi)
console.log(variavel)

const ovosDisponiveis = 6
if (ovosDisponiveis > 0) {
  console.log("Leve 6 leites")
} else {
  console.log("leve 1 leite")
}

const resto = 10 % 3
console.log("o resto eh " + resto)

const num = 8

if (num % 2 == 0) {
  console.log("eh par")
} else if (num % 3 == 0) {
  console.log("eh divisivel por 3")
} else {
  console.log("nenhum dos dois")
}

//ou se quiser que imprima duas condicoes par e div por 3 
if (num % 2 == 0) {
  console.log("é par")
} 
if (num % 3 == 0) {
  console.log("eh divisivel por 3")
} else {
  console.log("não divisivel por 3")
}
