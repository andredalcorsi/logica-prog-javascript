const form = document.querySelector('form')
const respUm = document.querySelector('#respUm')
const respDois = document.querySelector('#respDois')
const respTres = document.querySelector('#respTres')

form.addEventListener("submit", (e) => {
    e.preventDefault() 

    const saqueValor = Number(parseFloat(form.saqueValor.value))

    const notasCem = Math.floor(saqueValor/100)
    let resto = saqueValor % 100
    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50 
    const notasDez = Math.floor(resto/10)

    if (notasCem > 0) { 
        respUm.innerText = `Notas de 100: ${notasCem}`
    } if (notasCinquenta > 0) { 
        respDois.innerText = `Notas de 50: ${notasCinquenta}`
    } if (notasDez > 0) { 
        respTres.innerText = `Notas de R$10: ${notasDez}`
    }
})