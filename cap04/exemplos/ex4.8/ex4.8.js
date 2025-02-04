/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como 
resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. 
Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, 20 reais; 
b) o número máximo de parcelas permitido é 6. */

const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => { 

    e.preventDefault()

    const purchasePrice = Number(parseFloat(form.purchasePrice.value)) 
    const maximoParcelas = Number(6)
    const valorMinimo = Number(20) 
    
    for (let parcelasCont = maximoParcelas; parcelasCont >= 1; parcelasCont--) { 
        const valorParcela = purchasePrice / parcelasCont;

        if (valorParcela >= valorMinimo) { 
            resp.innerText = `Número máximo de parcelas: ${parcelasCont}. Valor da parcela: R$${valorParcela.toFixed(2)}`
            return
        }
    }
})