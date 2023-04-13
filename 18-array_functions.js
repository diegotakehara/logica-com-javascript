// aula 24 
// 1ª funcao = substitui o for (laços) - mas somente em arrays
const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
// forEach(paraCada) PASSA POR TODOS ELEMENTOS DO ARRAY = onde sempre o 1º paramentro é o elemento do array e o 2º param é a posicao - consegue fazer o for in e for of ao mesmo tempo
array.forEach((elem, pos) => {
  console.log(`${elem} está na posição ${pos}`)
}) // ______________________________________ 

// 2° = find (achar)= retorna o elemento
const valor = array.find((elem)=>{
  return elem === 10
})
console.log(valor) // retorna 
/* ou usar if para true ou false - muito usado para achar elementos em objetos exemplo nomes, emails etc: 

const valor = array.find((elem)=>{
  if (elem === 10) return true
  return false
})
console.log(valor)  
___________________________________*/

// 3º = findIndex (achaPosicao) = retorna a posição do elemento
const index = array.findIndex((elem)=>{
  if (elem === 10) return true
  return false
})
console.log(index)

// 4º = some = retorna a posição do elemento
const some = array.some((elem)=>{
  if (elem >= 10) return true
  return false
})
console.log(some)



// AULA 25 - PT 2
const newArray = [1, 2, 3, 4, 5, 6, 7, 8]
// funcao splice (emendar) - vai "fatiar" e retirar do array elementos -  onde no lugar do parametro informa-se a pos inicial do corte e na segunda (separado por virgulas) a quantidade de elementos a serem obtidos 
console.log(newArray.splice(1, 2))

// funcao map - altera os valores dentro do array seguindo uma regra
console.log(newArray.map((elemento)=>{
  return elemento * 2
}))

// funcao filter - altera os valores dentro do array seguindo uma regra ( se solicitar return true, passarao todos - se return false nenhum passará)
console.log(newArray.filter((elemento)=>{
  return elemento % 2 === 1
}))

// array pós splice, map e filter
console.log(newArray)

// reduce - reduz o array para algum outro elemento (menos utilizado)
console.log(newArray.reduce((acumulado, elemento)=>{
  return acumulado + elemento
}, 0)) // esse valor é onde iniciará a conta nesse caso em 0 para somar os elementos
console.log(newArray.reduce((acumulado, elemento)=>{
  return acumulado - elemento
}, 100))
