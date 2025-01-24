/* Elaborar um programa que leia um valor de um jantar. Calcule e informe 
o valor da taxa do garçom (10%) e o valor total a ser pago */ 

const dinnerPrice = prompt ("Valor do jantar. R$: ")
const taxWaiter = 0.1
const finalPrice = (Number(dinnerPrice) * Number(taxWaiter))+ Number(dinnerPrice) 

alert (`O valor do jantar é igual a R$${dinnerPrice}. A taxa do garçom é de R$${dinnerPrice * taxWaiter}. Valor total: R$${finalPrice}`)
