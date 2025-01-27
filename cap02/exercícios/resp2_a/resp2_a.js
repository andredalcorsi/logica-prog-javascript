/* Uma farmacia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, 
o cliente recebe como cdesconto os centavosa  do valor total. Elaborar um programa
que leia a descrição e preço de um medicamento. Informe o valor do produto na 
promoção. */

const form = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')



form.addEventListener("submit", (e) => {
    const medName = document.querySelector('#medName').value
    const medPrice = document.querySelector('#medPrice').value

    const newPrice = parseFloat(medPrice * 2)
    const restPrice = newPrice % 1
    const promoprice = newPrice - restPrice 
     

    resp1.innerText = `Promoção de ${medName}`
    resp2.innerText = `Leve 2 por ${promoprice.toFixed(2)}.`

    e.preventDefault()
})