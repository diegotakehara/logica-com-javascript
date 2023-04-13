//AULA 26 FUNCOES OBJETOS:
const person = {
  name: "José",
  lastName: "Fortes",
  age: 20
}
//keys - Cria um array com todas as chaves do objeto
console.log(Object.keys(person))

//values - Cria um array com todas os valores do objeto
console.log(Object.values(person))

//keys - Cria um array com todas as chaves do objeto
console.log(Object.entries(person))
//para enxergar, break point (variaveis-> local -> array)
const array = Object.entries(person)
array
/*cria array de arrays:
[['name', 'José'], ['lastName', 'Fortes'], ['age', '20']]*/

//Exemplo
const livros ={
  'Livro A': 19.90,
  'Livro B': 97.00,
  'Livro C': 20.00
}
const values = Object.values(livros)//values = [19.90, 97.00, 20.00]
const sum = values.reduce((val,acc)=>{
  return val+acc
}, 0) // iniciando a soma em 0
console.log(sum)