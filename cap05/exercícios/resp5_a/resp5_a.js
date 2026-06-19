/* Elaborar um programa que leia o nome de uma fruta e um número. O programa deve
repetir a exibição do nome da fruta, de acordo com o número informado.
Utilize "*" para separar nomes. A Figura 5.15 ilustra a execução do programa. */

const form = document.querySelector('form')
const resp = document.querySelector('#resp')


form.addEventListener('submit', (e) => { 
    e.preventDefault()

    resp.innerText = ""

    const insertFruit = String(form.fruta.value)
    let insertNum = Number(form.numero.value)
    let listaFrutas = []

    for (let contador = 1; contador <= insertNum; contador++) {
        listaFrutas.push(insertFruit)
    }

    resp.innerText += listaFrutas.join('*')

    form.reset()
})