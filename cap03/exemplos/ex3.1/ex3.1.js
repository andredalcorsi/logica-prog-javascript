const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados 
const num1 = Number(prompt('Insira um número: '))
const num2 = Number(prompt('Insira o segundo número: '))
const soma = num1 + num2 

console.log(`A soma de ${num1} e ${num2}é igual a ${soma}.`)

