//aula 23 - maneira simplificada para obter e manipular dados dos objetos de maneira mais prática
const pessoa = {
  nome: "José",
  idade: 20,
  senha:"123",
  casado: true,
  notas: [5, 8, 10], //array
  endereco: {
    rua: "Rua xyz",
    numero: 100,
    cidade: "Vitória",
  }
}
/* 
const nome =  pessoa.nome
const idade =  pessoa.idade */
const {nome, idade, endereco} = pessoa
console.log(nome)
console.log(idade)
console.log(endereco)
// funciona tambem em arrays
const array = [1,2,3,4]
const [a,b] = array
console.log(a)
console.log(b)
// adicionar elementos numa const ex: copia todo o objeto e pode alterar
const pessoaAtualizada = {
  ...pessoa,
  idade: 30,
  senha: "456"
}
console.log(pessoaAtualizada)
// funciona tambem em array
const newArray = [0, ...array, 5]
console.log(newArray)