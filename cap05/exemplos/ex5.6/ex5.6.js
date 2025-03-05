const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener("submit", (e) => { 

    e.preventDefault()

    let numDiv = 0
    const numPrimo = Number(form.numPrimo.value)

    let cont

    for (cont = 1; cont <= numPrimo; cont++) { 
        if (numPrimo % cont == 0) {
            numDiv++
        }
    }

    if (numDiv == 2) {
        resp.innerText = `${numPrimo} é Primo.`
    } else { 
        resp.innerText = `${numPrimo} não é Primo.`
    }
})