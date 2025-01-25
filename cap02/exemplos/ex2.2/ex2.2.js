/* Elaborar um prorama para um Ciinema, que leeeia o título e a duração de umm filme em minutos. 
Converta a duração para horas e minutos. */ 

const form = document.querySelector('form')
const resp = document.querySelector('h3')
const movieDuration = document.querySelector("#durationMin").value

form.addEventListener("submit", (e) => {
    const movieN = form.movieName.value // Obtaining the movie name 
    let movieInHours = Math.floor(movieDuration / 60)
    let movieRest = (movieDuration % 60)
    resp.innerText = `Nome do filme: ${movieN}. Duração: ${movieInHours} hora(s) e ${movieRest} minuto(s). ` 
    e.preventDefault()
})