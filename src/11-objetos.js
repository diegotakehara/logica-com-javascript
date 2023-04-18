// AULA 17 -objetos e arrays sao os mais usados na parte estrutural no js
const num = 10
//const array = []
//arrays tem posiçoes, objs tem chave-valor
const pessoa = {
  nome: "José",
  idade: 20,
  casado: true,
  notas: [5, 8, 10], //array
  endereco: {
    rua: "Rua xyz",
    numero: 100,
    cidade: "Vitória",
  }
}

console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.idade)
console.log(pessoa["casado"])
console.log(pessoa.casado)
console.log(pessoa["notas"][2])
console.log(pessoa["notas"][0])
console.log(pessoa.notas[0])// posicao de array tem q ser entre []
console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)

array = [pessoa, pessoa]
console.log(array) // colocar um break e na hora de executar aparece as posicoes do array pessoa
