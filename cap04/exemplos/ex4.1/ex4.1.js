const form = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const nameAlumni = document.querySelector('#nameAlumni').value
    const firstGrade = parseFloat(form.firstGrade.value)
    const secondGrade = parseFloat(form.secondGrade.value)

    const media = (firstGrade + secondGrade)/2 

    resp1.innerText = `A média da soma das notas ${firstGrade.toFixed(2)} e ${secondGrade.toFixed(2)} é igual a ${media.toFixed(2)}`;

    if (media >= 5) { 
        resp2.innerText = (`Situação de ${nameAlumni}: Aprovado`)
        resp2.style.color = "green"
    } else { 
        resp2.innerText = (`Situação de ${nameAlumni}: Reprovado`)
        resp2.style.color = "red"
    }
    
 
})
