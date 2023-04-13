
// AULA 15 -forma de criar lista no JS
const variavel = 10
let array = [true, false, 0, 1, 2, "string A", "sejadev", variavel]
  console.log(array[6]) // imprimir uma posicao
//modificar todo o array sendo let, const nao modifica:
array = [0, 1, 2, 3 ,4, 5, 6, 7]
  console.log(array[6])

// modif apenas uma posicao:
array[0] = "string B"
  console.log(array[0])
  console.log(array[6])

// adicionar novo valor ao final do array sem precisar saber qnts posiçoes
array.push("string C", "string D") 
  console.log(array)
// remover ultimo elemento:
array.pop() 
  console.log(array)

//TAMANHO DO ARRAY
let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length) {
  console.log(i)
  console.log(newArray[i])
  i++
}

// com for
for (let pos = 0; pos < newArray.length; pos++) {
  console.log(newArray[pos])
}

// for...in utiliza posicoes do array
for (let pos in newArray) {
  console.log(pos)
  console.log(newArray[pos])
}
//for...of ja utiliza os valores dos elementos
for (let arr of newArray) {
  console.log(arr)
}

//EXERCICIO: Dado um array com X numeros, encontrar a media desses. onde media = (soma dos elementos) / tamanho

const numbers = [10, 20, 70]
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length
console.log(media)
