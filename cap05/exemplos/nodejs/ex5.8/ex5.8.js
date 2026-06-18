const prompt = require("prompt-sync")()
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair.")
do { 

        const Ano = Number(prompt('Digite o ano: '))
        if (Ano == 0) { 
            break
        } else if (Ano == 1942 || Ano == 1946) { 
            console.log(`Não houve Copa do Mundo em ${Ano}. Motivo: Segunda Guerra Mundial`)
        } else if (Ano >= 1930 && Ano % 4 == 2) {
            console.log(`${Ano} é ano de Copa do Mundo!`)
        } else { 
            console.log(`${Ano} não é ano de Copa do Mundo`)
        }
    } while(true)
