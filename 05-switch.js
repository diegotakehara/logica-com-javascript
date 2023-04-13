/*
Dado um numero(1 a 12), construir uma logica para imprimir o nome do mes do numero
*/

const numMes = 13
//se houver apenas uma resposta para condicional, nao precisa usar chaves e pode escrever na mesma linha, se houver 2, é necessario usar as chaves:
if (numMes === 1) console.log("janeiro")
else if (numMes === 2) console.log("fevereiro")
else if (numMes === 3) console.log("março")
else if (numMes === 4) console.log("abril")
else if (numMes === 5) console.log("maio")
else if (numMes === 6) console.log("junho")
else if (numMes === 7) console.log("julho")
else if (numMes === 8) console.log("agosto")
else if (numMes === 9) console.log("setembro")
else if (numMes === 10) console.log("outubro")
else if (numMes === 11) console.log("novembro")
else if (numMes === 12) console.log("dezembro")
else console.log ('"Digite  um numero válido"')

//SWITCH CASE = VANTAGEM TROCAR APENAS UMA VEZ A VARIAVEL, MELHOR PRATICA

switch (numMes) {
  case 1:
    console.log("JANEIRO")
  break
  case 2:
    console.log("FEVEREIRO")
  break
  case 3:
    console.log("MARÇO")
  break
  case 4:
    console.log("ABRIL")
  break
  case 5:
    console.log("MAIO")
  break
  case 6:
    console.log("JUNHO")
  break
  case 7:
    console.log("JULHO")
  break
  case 8:
    console.log("AGOSTO")
  break
  case 9:
    console.log("SETEMBRO")
  break
  case 10:
    console.log("OUTUBRO")
  break
  case 11:
    console.log("NOVEMBRO")
  break
  case 12:
    console.log("DEZEMBRO")
  break
  default:
    console.log("MÊS INEXISTENTE")
  break
}