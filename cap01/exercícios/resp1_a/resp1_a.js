/* Elaborar um programa que leia um número. Calcule e iinforme os seus vizinhos, ou seja, o número anterior e posterior */

const number = Number(prompt('Informe um número: '))
const sumObj = Number(1)
const before = number - sumObj 
const after =  number + sumObj

alert (`Número escolhido: ${number}. Anterior: ${before}. Posterior ${after}.`)