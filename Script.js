
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#Button");
let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerpassword = document.querySelector("#container-password");
let copyFeedback = document.querySelector("#copy-feedback");
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&_*+";
let novasenha = "";


sizepassword.innerHTML = sliderElement.value;
sliderElement.oninput = function() {
    sizepassword.innerHTML = this.value;
}


function generatepassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;
    if (copyFeedback) {
        copyFeedback.textContent = "";
        copyFeedback.classList.remove("visible");
    }
}


async function copypassword() {
    if (!novasenha) return;
    try {
        await navigator.clipboard.writeText(novasenha);
        if (copyFeedback) {
            copyFeedback.textContent = "Password copied successfully!";
            copyFeedback.classList.add("visible");
            setTimeout(() => {
                copyFeedback.classList.remove("visible");
                copyFeedback.textContent = "";
            }, 1800);
        }
    } catch (e) {
        if (copyFeedback) {
            copyFeedback.textContent = "Error copying password.";
            copyFeedback.classList.add("visible");
        }
    }
}