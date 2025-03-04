let num 
do {
    num = Number(prompt("Insira um número: "))

    if (num == 0 || isNaN(num)) {
        alert("Digite um número válido...")
    }
} while (num == 0 || isNaN(num)) 
    let pares = `Pares entrre 1 e ${num}: `

    for (let i=2; i <= num; i = i + 2) {
        pares = pares + i 
    }

    alert(pares)