const prompt = require("prompt-sync")()
console.log("Impressora de Etiquetas. Digite 'Sair' ou 0 para finalizar a tarefa")

    const produto = String(prompt('Produto: '))
    const qtd_etq = Number(prompt('Qtde. Etiquetas: '))

    for (let contador = 1; contador <= qtd_etq / 2; contador++) {
        console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
    } if (qtd_etq % 2 == 1) {
        console.log(produto)
    }

    

