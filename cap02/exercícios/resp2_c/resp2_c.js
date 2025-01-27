/* Um supermercado está com uma promoção. Para aummentar suas vendas no setor 
de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% 
de desconto (para umm item) na compra de três unidades do produto. Elaborar um 
programa que leia descrição e preço de um produto. Após, acrescente as mensagens
indicando a promoção. */ 

// Referenciando elementos HTML
const form = document.querySelector('form')
const resp = document.querySelector('#resp')
const resp2 = document.querySelector('#resp2')

//Criando um "ouvinte" para o meu evento "submit". 
form.addEventListener("submit", (e) => {
    //Referenciando as caixas de texto dentro HTML no JS
    const name = document.querySelector('#prodName').value
    const price = document.querySelector('#priceProd').value

    //Calculando a promoção. Aqui, basicamente, vocẽ multiplica o preço e faz o calculo com o preço -50%
    //Use a ordem de precedencia 
    const promoPrice = Number(parseFloat(price * 3))- (price - (price *0.5))

    //Mesma coisa, mas atribuindo somente a metade do preço digitado 
    const halfPrice = Number(parseFloat(price - (price * 0.5)))
    
    //Reproduzindo as respostas na minha tela
    resp.innerText = `${name}. Promoção: leve 3 por R$${promoPrice.toFixed(2)}`
    resp2.innerText = `O terceiro produto sai por R$${halfPrice.toFixed(2)}`
    
    //Evitando que o formulário seja enviado
    e.preventDefault()
})