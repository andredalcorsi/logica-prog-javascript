/*Elaborar um programa para uma empresa que leia o salário e o tempo que um
funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadrienio) o funcuionário recebe
um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário 
tem direito e o salário final */

const prompt = require("prompt-sync")() 
const salario = parseFloat(prompt("Informe o salário em R$: "))
const tempoEmpresa = parseFloat(prompt("Tempo de empresa: "))

const quadrienios = Math.floor(tempoEmpresa/4)

const novoSalario = salario + (salario * 0.01) 

console.log (`Quantidade de quadrienios: ${quadrienios}`)
console.log(`Novo salário: ${novoSalario}`)



