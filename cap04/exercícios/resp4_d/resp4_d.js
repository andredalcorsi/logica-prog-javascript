/* Elaborar um programa que leia três lados e verifiique se eles podem ou não formar um triângulo. 
Para formar um triângulo, um dos lados não pode seer maior que a soma dos outros doisi. Caso 
possam formar um triângulo, exiba também qual o tipo do triângulo.

Equilátero: 03 lados iguais 
Isósceles: 02 lados iguais
Escaleno: 03 lados diferentes */

const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener("submit", (e) => { 
    e.preventDefault()

    const sizeOne = Number(form.sizeOne.value)
    const sizeTwo = Number(form.sizeTwo.value)
    const sizeThree = Number(form.sizeThree.value) 

    if (sizeOne === sizeTwo && sizeTwo === sizeThree && sizeThree === sizeOne) {
        resp.textContent = `Equilátero`
    } else if (sizeOne === sizeTwo || sizeTwo === sizeThree || sizeThree === sizeOne) { 
        resp.textContent = `Isósceles`
    } else if (sizeOne != sizeTwo && sizeTwo != sizeThree && sizeThree != sizeOne) { 
        resp.textContent = `Escaleno`
    } else { 
        alert ('Favor, colocar um valor válido.')
    }
    
})