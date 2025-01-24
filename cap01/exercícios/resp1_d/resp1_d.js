/* Elaborar um programa que leia 2 notas de umm aluno em umma disciplina. Calcule e informe a média das notas */

const grade1 = parseFloat(prompt('Nota 1: '))
const grade2 = parseFloat(prompt('Nota 2: '))
const media = parseFloat((grade1 + grade2))/2

alert (`A média das notas ${grade1} e ${grade2} é igual a ${media.toFixed(2)}`)