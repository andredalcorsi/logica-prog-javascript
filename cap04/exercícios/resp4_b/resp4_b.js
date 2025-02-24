const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener("submit", (e) => { 
    e.preventDefault() 

    const speedL = Number(parseFloat(form.speedLimit.value))
    const driverS = Number(parseFloat(form.driverSpeed.value))


    const speed20 = speedL + (speedL * 0.2)
    

    if (driverS <= speedL) { 
        resp.innerText = `Sem multa`
    } else if (driverS <= speed20) {
        resp.innerText = `Multa leve`
    } else { 
        resp.innerText = `Multa Grave`
    }
})