const form = document.querySelector('form')
const resp = document.querySelector('#resp')


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const insertCoins = Number(parseFloat(form.coinsValue.value))

    const min30 = Number(parseFloat(1.00))
    const min60 = Number(parseFloat(1.75))
    const min120 = Number(parseFloat(3.00))

    if (insertCoins < 1) {
        alert('Valor insuficiente.')
    } else if (insertCoins >= 1 && insertCoins < 1.75) {
        resp.innerText = `Valor inserido: R$${insertCoins.toFixed(2)}Tempo de permanência: 30 minutos. Troco ${insertCoins - min30}`
    } else if (insertCoins >= 1.75 && insertCoins < 3.00) { 
        resp.innerText = `Valor inserido: R$${insertCoins.toFixed(2)}. Tempo de permanência: 60 minutos. Troco ${insertCoins - min60}`
    } else if (insertCoins >= 3) { 
        resp.innerText = `Valor inserido: R$${insertCoins.toFixed(2)}. Tempo de permanência: 120 minutos. Troco ${insertCoins - min120}`
    }

    
})