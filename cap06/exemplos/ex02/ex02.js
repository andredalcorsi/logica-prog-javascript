const form = document.querySelector('form')
const resp = document.querySelector('#resp')
const respChances = document.querySelector('#chances')
const respErros = document.querySelector('#erros')
const respErrosTxt = document.querySelector('#errosTxt')
const newTry = document.querySelector('#newBtn')
const respDica = document.querySelector('#respDica')

const erros = [] // Armazena quantas vezes você errou 

const sorteado = Math.floor(Math.random() * 100) + 1 // Gera números de 1 a 100. +1 pois considera a partir de 0.

let chances = 6 // Constante com número máximo de chances

respChances.innerText = `Chances: ${chances}`

form.addEventListener('submit', (e) => { 

    e.preventDefault()

    const inputNum = form.inputNumber.value

        let mensagem = "Número digitados incorretamente: "

        if (inputNum == sorteado) {
            resp.innerText = `Parabéns! Você acertou. Número da sorte ${sorteado}` 
            form.submitBtn.disabled = true
        }
        if (inputNum == erros) {
            alert('Você já jogou esse número. Tente outro')
            return
        }
        if (inputNum != sorteado && chances != 0) {
            chances = chances-1
            respChances.innerText = `Chances: ${chances}`
            respErros.innerText = `Erros: ${erros.push(inputNum)}`

            const dica = inputNum < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: tente um número ${dica} que ${inputNum}`
            

            if (chances == 1) {
                alert('Última chance!')
            } else if (chances == 0) {
                alert(`Suas chances acabaram! O número sorteado era: ${sorteado}`)
                form.submitBtn.disabled = true
            } 
            
        erros.forEach(function(item, index) {
            if (index === erros.length - 1) { 
                mensagem = mensagem + item
            } else { 
                mensagem = mensagem + item + ", "
            }
        })

        respErrosTxt.innerText = mensagem
     
    }
     
})

newTry.addEventListener("click", () => {
    location.reload()
})

    