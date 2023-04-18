/*
1- João, um pescador, gostaria de controlar o rendimento diário de seu trabalho.
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento 
de pesca (50 kg), deve pagar uma multa de R$ 4/kg excedente. 
Faça um script que leia o peso de peixes de Joao e verifica se há excesso.
Caso haja, gravar na variável excesso e na variavel multa o valor que deverá ser pago.

para resolver:
identificar entradas = limite 50kg, multa de $4/kg, peso de peixes Joao
saidas = excesso em kg e multa a pagar
*/

const pesca = 52
const limite = 50
const multa = 4

let excesso = pesca > limite ? pesca - limite : 0
let pagar = excesso * multa

console.log("Excesso em Kg:", excesso)
console.log("Multa: R$", pagar)