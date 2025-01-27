/* Elaborar um programa para uma lan house de um aeroporto.
O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo
de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, 
sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral
A figura 2.10 exibe um exemplo com dados do programa. */

//Referenciando objetos em HTML
const form = document.querySelector('form')
const resp = document.querySelector('#resp')

//Criando um "ouvinte" para a minha função
form.addEventListener("submit", (e) => {
    //Referenciando os elementos HTML
    const timePrice = document.querySelector('#priceTime').value
    const customerPrice = document.querySelector('#customerTime').value

    //Calcula quantos blocos de 15 minutos o cliente utilizou, arredondando para cima
    const timeBlocks = Math.ceil(Number(parseFloat(customerPrice/15)))

    //Calcular o preço no bloco correto de 15 minutos
    const finalPrice = Number(parseFloat(timeBlocks * timePrice))

    // Mostra a resposta na tela
    resp.innerText = `Valor a pagar: R$${finalPrice.toFixed(2)}`

    //Evita de o formulário ser enviado
    e.preventDefault()
})