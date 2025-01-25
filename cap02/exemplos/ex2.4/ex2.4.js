/* Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente 
Exiba o valor a ser pago. */

const res1 = document.querySelector('#res1')
const form = document.querySelector('form')

form.addEventListener("submit", (e) => { 
    const quiloPrice = document.querySelector('#priceWeight')
    const consumption = document.querySelector('#customerConsumption').value

    const convertConsumption = parseFloat(consumption/1000)
    const finalPrice = Number(quiloPrice*convertConsumption)

    res1.innerText = `Valor a pagar : R$${finalPrice.toFixed(2)}`
    e.preventDefault()
})