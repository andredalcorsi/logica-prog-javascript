const form = document.querySelector('form')
const resp = document.querySelector('h3')

//Criando ouvinte 

form.addEventListener("submit", (e) => {
    const name = form.inNome.value //Obtém o nome digitado no formulario
    resp.innerText = `Olá ${name}!` // Exibe a resposta do programma
    e.preventDefault() // Evita o envio do form
})