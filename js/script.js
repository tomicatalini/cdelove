const elemento = document.querySelector(".menu-btn");
elemento.addEventListener("click",activar);

function activar(e) {
    let elemento = document.querySelector("nav");    
    elemento.classList.toggle("activar-flex");
    console.log(elemento.classList);
}