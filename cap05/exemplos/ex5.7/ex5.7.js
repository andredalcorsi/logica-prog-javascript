const form = document.querySelector('form')
const resp = document.querySelector('#resp')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const numberQt = Number(form.numberQt.value)
   let numEstrelas = 0 
   
   for (let cont = 0; cont <= numberQt; cont++) { 
        numEstrelas++
   } 
})