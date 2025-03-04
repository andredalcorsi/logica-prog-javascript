const form = document.querySelector('form')
const resp = document.querySelector('#resp') 


form.addEventListener('submit', (e) => {
    e.preventDefault() 

    const inputNumber = form.inputNumber.value 

    let count = ""

    for (count = inputNumber; count >= 1; count--)  {
        resp.innerText += `${count} \n`
    }
 
})