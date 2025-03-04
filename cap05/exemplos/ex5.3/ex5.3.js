const form = document.querySelector('form')

form.addEventListener('submit', (e => { 
    e.preventDefault()

    let num 
    
    do { 
        num = Number(prommpt("Numero: ")) // lê um número
        if (num == 0 || isNaN(num)) {
            alert("Digite um número válido")
        } while (num == 0 || isNaN(num)){
            
            let pares = `Pares entre 1 e ${num}:`

            for (let i = 2; i <= num; i = i + 2)

            pares = pares + i + ","
        }
        alert(pares)       
    }

}))