/* Elaborar um programa que leia dois números. Calcule e informe a somma desses números. 

- Entrada de dados: ler dois números
- Processamento: calcular a soma 
- Saída: informar a soma */

const num1 = prompt("Primeiro número: ")
const num2 = prompt("Seundo número: ")
let soma = Number(num1) + Number(num2)  

alert (`A soma dos números ${num1} e ${num2} é igual a ${soma} `)