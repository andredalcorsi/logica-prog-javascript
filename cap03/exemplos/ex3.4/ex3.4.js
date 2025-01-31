/* Elaborar um programa para uma clínica veterinária, que leia o peso de uma 
ração emm kg e o quanto um gato consome por dia da ração, em gramas. Informe 
quantos dias irá durar a ração e o quanto sobra da ração (em gramas) */ 
const prompt = require("prompt-sync")() 
const pesoKg = parseFloat(prompt('Informe o peso da ração(kg): '))
const consumoDiario = parseFloat(prompt("Quanto é o consumo diário? (g): " )) 

const pesoGr = parseFloat(pesoKg*1000)
const duracao = Math.floor(pesoGr/consumoDiario)
const sobra = pesoGr % consumoDiario

console.log(`Duração: ${duracao} dias. Sobra: ${sobra}`) 