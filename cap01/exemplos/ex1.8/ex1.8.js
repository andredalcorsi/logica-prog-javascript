/* Elaborar um programa que leia a duração de uma viagem em dias e horas. 
Calcule e informe a duração total da viagem em número de horas*/

const days = Number(prompt("Duração da viagem em dias: "))
const hours = Number(prompt("Duração da viagem em horas: "))

const daysinHours = days * Number(24)
const totalTrip = Number(daysinHours) + hours

alert(`A viagem durou ${days} dias e ${hours} horas. Contabilizando, foi uma viagem de ${totalTrip} horas.`)
