/*
Elabore um algoritmo que dada a idade de um nadador
classifique-o em uma das categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos


*/

/* como aprendemos, codigo estranho e dificil
const idade = 6
if (idade >= 5) {
  if (idade <=7) {
    console.log("Infantil A")
  } else if (idade <= 11) {
    console.log("Infantil B")
  }
}

operadores logicos:
OU = || - a condicao é vdd se um ou outro true
E = && - a cond é vdd se os dois forem true
*/

const idade = 16
if (idade >=5 && idade <= 7) console.log("Infantil A")
else if (idade >=8 && idade <= 11) console.log("Infantil B")
else if (idade >=12 && idade <= 13) console.log("Juvenil A")
else if (idade >=14 && idade <= 17) console.log("Juvenil B")
else if (idade >= 18) console.log("Categoria Adulto")
else console.log("Idade mínima requerida")
