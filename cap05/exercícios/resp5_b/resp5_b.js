/* Digamos que o número de chinchilas de uma fazenda triplica a cada ano, 
após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas 
e anos e informe ano a ano oo número médio previsto de chinchilas da fazenda. 
O número inicial e chinchilas deve ser maior ou igual a 2 (um casal)*/

const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    resp.innerText = ""

    let insertChinchila = Number(form.ChinchilasQt.value)
    let insertYears = Number(form.AnosQt.value)
     
    for (let contador = 1; contador <= insertYears; contador++) {
        resp.innerText += `${contador}º Ano: ${insertChinchila} Chinchilas\n`
        insertChinchila *= 3
    }

    form.reset()
})