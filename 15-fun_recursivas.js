// AULA 21 Mesmo exercicio anterior - A função chama ela mesma (+ lenta e menos comum de ser usada)
function fatorial(n){
  if(n<=2) return n
  return fatorial(n-1)*n
}

const numero = 5
const resposta = fatorial(numero)
console.log(resposta)