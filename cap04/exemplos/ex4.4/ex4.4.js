const form = document.querySelector("form")
const resp = document.querySelector("#resp")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrasil = Number(form.horaBrasil.value)
    let horaFranca = horaBrasil + 5
    
    if (horaBrasil == '') {
        alert('Algo está errado. Por favor, preencha o campo corretamente')
    } else if (horaFranca > 24) {
        
        horaFranca = horaFranca - 24
        resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
    }
})