/* Elaborar um programa para revenda de veiculos. O programa deve ler modelo e 
preço do veículo. Apresentar como resposta o valor de entrada (50%) e o saldo em 12x */

const form = document.querySelector('form')
const resVehicle = document.querySelector('#res1')
const resPrice = document.querySelector('#res2')
const resCondition = document.querySelector('#res3')


form.addEventListener("submit", (e) => { 

    const vehicleName = document.querySelector('#vehicleName').value
    const vehiclePrice = document.querySelector('#vehiclePrice').value
    const firstPrice = parseFloat(vehiclePrice) - (Number(vehiclePrice) * Number(0.5))
    const vehicleInstallments = (firstPrice/12)

    resVehicle.innerText = `Promoção: ${vehicleName}`
    resPrice.innerText = `Valor: R$${vehiclePrice}`
    resCondition.innerText = `Entrada inicial: R$${firstPrice.toFixed(2)}. +12x de R$${vehicleInstallments.toFixed(2)}`
    e.preventDefault()
})