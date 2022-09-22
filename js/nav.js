//apuntar a la class de la etiqueta que queremos modificar con el click
const hamburger = document.querySelector(".hamburger")
const bar = document.querySelectorAll(".bar")
const navMenu = document.querySelector(".nav-menu")

//clase active
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active-hamburger")
    navMenu.classList.toggle("active-nav-menu")
    bar.forEach((span) => { span.classList.toggle("active-bar") })
})

//classlist para añadir una nueva clase
//toggle activa y desactiva

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active-hamburger");
    navMenu.classList.remove("active-nav-menu");
}))