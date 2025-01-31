const prompt = require("prompt-sync")() //adicionando o pacote node ao programa

const veiculo = prompt('Nome do veículo: ')
const preco = Number(prompt ('Valor. R$: '))

const entrada = (preco * 0.5) //valor da entrada
const parcela = (preco * 0.5) / 12 // valor das parcelas restantes 

console.log(`Nome do veículo: ${veiculo}`)
console.log(`Entrada: ${entrada.toFixed(2)}`)
console.log(`Parcela: ${parcela.toFixed(2)}`)

