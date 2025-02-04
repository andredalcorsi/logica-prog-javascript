/* Elaborar um programa que leia um número - que deve  ser uma centena. calcule e exiba 
a centena invertida. Caso o número não seja uma centena, exiba mensagem. */

const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const insertNum = Number(form.numberInsert.value) 

    if (insertNum >= 100 && insertNum <= 999) { 
        let inverteNum = insertNum.toString().split('').reverse().join('')
        resp.innerText = `Número digitado: ${insertNum}. Invertido: ${inverteNum}`
    } else {
        resp.innerText = `${insertNum} não é uma centena. `
    }
})