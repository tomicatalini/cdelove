let menuBtn = document.querySelector(".bx-menu");
let closeBtn = document.querySelector(".bx-x");

menuBtn.addEventListener("click",despliegueMenu);
closeBtn.addEventListener("click",despliegueMenu);

function despliegueMenu(e) {
    let menuBtn = document.querySelector(".bx-menu");
    let nav = document.querySelector("nav");
    let closeBtn = document.querySelector(".bx-x");

    menuBtn.classList.toggle("oculto");
    closeBtn.classList.toggle("oculto");
    nav.classList.toggle("activar-flex");
}