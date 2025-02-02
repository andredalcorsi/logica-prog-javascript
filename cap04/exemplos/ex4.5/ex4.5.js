const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const raiz = Number(form.raizNum.value)
    const showRaiz = Math.sqrt(raiz)

    if (Number.isInteger(showRaiz)) {
        resp.innerText = `Raiz: ${showRaiz}`
    } else { 
        resp.innerText = `Não há raiz exata para o número ${raiz}.`
    }

})