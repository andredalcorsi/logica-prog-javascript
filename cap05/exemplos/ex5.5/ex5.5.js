const form = document.querySelector('form')
const resp = document.querySelector('#resp')
const resp2 = document.querySelector('#resp2')


let resposta = ""
let numContas = 0 
let valTotal = 0

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = form.billDesc.value
    const preco = Number(parseFloat(form.billPrice.value))

    numContas++ 

    valTotal += preco

    resposta += descricao + "- R$: " + preco.toFixed(2) + "\n"

    resp.innerText = `${resposta} ---------------------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`
})