const form = document.querySelector('form')
const resp = document.querySelector('#resp')
const respChances = document.querySelector('#chances')
const respErros = document.querySelector('#erros')

const erros = [] // Armazena quantas vezes você errou 

const sorteado = Math.floor(Math.random() * 100) + 1 // Gera números de 1 a 100. +1 pois considera a partir de 0.

let chances = 6 // Constante com número máximo de chances

respChances.innerText = `Chances: ${chances}`

form.addEventListener('submit', (e) => { 

    e.preventDefault()

    const inputNum = form.inputNumber.value

        if (inputNum != sorteado && chances != 0) {
            chances = chances-1
            respChances.innerText = `Chances: ${chances}`

            if (chances == 1) {
                alert('Última chance!')
            }
            
        } else if (inputNum == sorteado) {
            resp.innerText = `Parabéns! Você acertou. Número da sorte ${sorteado}`  
        } else {
            alert('Suas chances acabaram.')
        }
})

    