/* Elaborar um programa que leia um número e verifique se ele é ou não perfeito.
Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros 
(exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.*/

const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => { 

    e.preventDefault()

    resp.innerText = ""

    let insertNumber = Number(form.insNumber.value)

    let keepNumber = []
    let soma = 0

    for (let contador = 1; contador <= insertNumber / 2; contador++) {
        if (insertNumber % contador == 0) {
            soma+=contador
            keepNumber.push(contador)
        }
    }

     if (soma == insertNumber) { 
            resp.innerText = `O número ${insertNumber} é perfeito.\nDivisores do ${insertNumber}: ${keepNumber.join(', ')}. (Soma: ${soma})`
        } else {
            resp.innerText = `O número não é perfeito!`
        }
        
    form.reset()
})