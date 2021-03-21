let inputs = document.querySelectorAll(".login-input");

inputs.forEach(input => {
    input.addEventListener("click",activar);
});

function activar(e) {
    let input = e.target;
    let label = input.nextElementSibling;
    
    label.classList.add("input-active");
}