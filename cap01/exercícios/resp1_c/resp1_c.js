/* Elaborar um programa para uma loja, o qual leia o preço de um produto e informe 
as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x. */


const productPrice = parseFloat(prompt('Valor do produto. R$: ')) 
const discount = productPrice - (productPrice * Number(0.1))
const numberInstallments = Number(prompt("Número de parcelas: "))
const installments = productPrice/Number(numberInstallments)

if (numberInstallments === 0) { 
 
    alert (`Preço do produto é de R$${productPrice}. À vista, você pagará R$${discount}.`)

} else if (numberInstallments >= 0) {
 
    alert (`Parcelado: ${numberInstallments}x de ${installments.toFixed(2)} sem juros`)

} else { 
    alert ('Algo não saiu como esperado. Recarregue a páina e tente novamente.')
}
