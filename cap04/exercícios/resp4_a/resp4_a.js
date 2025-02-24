/* Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if... else... tradicional e,
depois, tente criar a condição com o operador ternário */


const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const evenOdd = Number(form.parImpar.value)

    if (evenOdd % 2 === 0) {
        resp.innerText = `${evenOdd} é par.`
    } else { 
        resp.innerText = `${evenOdd} é ímpar`
    }

})
