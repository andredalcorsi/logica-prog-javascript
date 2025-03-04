const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener('submit', (e) => { 
    e.preventDefault()

    const inputNumber = form.numberInput.value

    let count = ""

    for (count = 1; count <= 10; count++) { 
        resp.innerText += `${inputNumber} x ${count} = ${count*inputNumber} \n`
    }
})