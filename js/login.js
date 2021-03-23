let loginInputs = document.querySelectorAll(".login-input");
let signupInputs = document.querySelectorAll(".signup-input");
let passVisibilityOn = document.querySelector(".pass-visible");
let passVisibilityOff = document.querySelector(".pass-hidden");

loginInputs.forEach(input => {
    input.addEventListener("click",activar);
    input.addEventListener("focusin",activar);
    input.addEventListener("focusout",reestablecer);
});
signupInputs.forEach(input => {
    input.addEventListener("click",activar);
    input.addEventListener("focusin",activar);
    input.addEventListener("focusout",reestablecer);
});

passVisibilityOn.addEventListener("click",passVisible);
passVisibilityOff.addEventListener("click",passHidden);


function activar(e) {
    let input = e.target;
    let label = input.nextElementSibling;
    
    label.classList.add("input-active");
}

function reestablecer(e) {
    let input = e.target;
    let label = input.nextElementSibling;

    if(input.value == '') {
        label.classList.toggle("input-active",false);
    }
}

function visibility(e) {
    let visibility = e.target.parentElement;
    let input = visibility.parentElement;

    for (const elem of input.children) {
        if(elem.classList.contains("pass-visibility")){
            elem.classList.toggle("oculto");
        }
    }
}

function passVisible(){
    let iconVisible = document.querySelector(".pass-visible");
    let iconHidden = document.querySelector(".pass-hidden");
    let passInput = document.querySelector(".input-pass");

    iconVisible.classList.toggle("oculto");
    iconHidden.classList.toggle("oculto");

    passInput.setAttribute("type","text");
}
function passHidden(){
    let iconVisible = document.querySelector(".pass-visible");
    let iconHidden = document.querySelector(".pass-hidden");
    let passInput = document.querySelector(".input-pass");

    iconVisible.classList.toggle("oculto");
    iconHidden.classList.toggle("oculto");

    passInput.setAttribute("type","password");
}