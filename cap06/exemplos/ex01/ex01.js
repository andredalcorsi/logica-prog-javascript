const form = document.querySelector('form')
const resp = document.querySelector('#resp')
const respLista = document.querySelector('span')

const pacientes = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const namePatient = form.patientName.value
    pacientes.push(namePatient)
    let lista = ""

    for (let contador = 0; contador < pacientes.length; contador++) {
        lista+= `${contador + 1}.${pacientes[contador]}\n`
    }

    resp.innerText = lista 
    form.patientName.value = ""
    form.patientName.focus()
})

form.urgencyBtn.addEventListener('click', () =>{
    if (!form.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.")
        form.patientName.focus()
        return
    }

    const nome = form.patientName.value
    pacientes.unshift(nome)
    let lista = ""

    pacientes.forEach((paciente, index) => (lista += `${index + 1}. ${paciente}\n`))
    resp.innerText = lista 
    form.patientName.value = ""
    form.patientName.focus()
})


form.attendBtn.addEventListener('click', () =>{
    if (pacientes.length == 0) { 
        alert('Não há pacientes para atender.')
        form.patientName.focus()
        return
    }

    const atendido = pacientes.shift()
    respLista.innerText = atendido
    
})