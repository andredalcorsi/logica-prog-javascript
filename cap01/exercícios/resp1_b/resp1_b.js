/* Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão 
pagá-la. Calcule e informe o valor a ser pago por cada cliente */

const restaurantPrice = parseFloat(prompt('Valor final da pizzaria. R$: '))
const customerQuantity = Number(prompt('Quantidade de clientes: '))
let perCustomer = parseFloat(restaurantPrice/customerQuantity)

alert (`Preço total: R$${restaurantPrice.toFixed(2)}. Quantidade de clientes: ${customerQuantity} pessoas. Preço a ser pago por cada cliente: R$${perCustomer.toFixed(2)}`)