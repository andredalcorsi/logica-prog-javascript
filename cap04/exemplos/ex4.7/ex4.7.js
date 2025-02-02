/* A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem
direito a levar um peixe. Peixes extras custam R$12,00. Elabore um programa 
que leia o número de pessoas de uma família que foram ao clube e o número de 
peixes obtidos na pescaria. Informe o valor a pagar. */

const form = document.querySelector('form')
const entrada = Number(20)
const peixeExtra = Number(12)
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => { 
    
    e.preventDefault()

    const familyMembers = Number(form.familyMembers.value) 
    const fishNumbers = Number(form.fishNumbers.value)

    let ingressoPessoal = entrada * familyMembers

    if (familyMembers == fishNumbers) { 
        resp.innerText = `Valor a pagar: R$${ingressoPessoal}`
    } else if (fishNumbers > familyMembers) { 
        const valorExtra = ingressoPessoal + (fishNumbers - familyMembers) * peixeExtra
        resp.innerText = `Valor a pagar: R$${valorExtra.toFixed(2)}`
    } else {
        alert('Favor, verificar os dados inseridos e tente novamente.')
    }

})