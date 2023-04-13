// AULA 16 -dada a lista, qual a quantidade de eleitores obrigatorios, facultativos e nao eleitores, considerando: Obrigatorios (entre 18 e 69 anos); Facultativos (entre 16 e 17 anos ou com/acima de 70) e Nao Eleitor(Abaixo de 16 anos).
const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) naoEleitor++
  else facultativo++
}
console.log("Obrigatório: ", obrigatorio)
console.log("Facultativo: ", facultativo)
console.log("Não Eleitor: ", naoEleitor)