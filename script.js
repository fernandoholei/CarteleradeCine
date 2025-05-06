const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("tema").value;
    let message = document.getElementById("message").value;

    let invalidChars = /[$@#]/; 
    let startsWithNumber = /^[0-9]/;

    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
        alert("Todos los campos son obligatorios.");
        event.preventDefault();
        return;
    }

    if (invalidChars.test(name) || invalidChars.test(subject) || invalidChars.test(message)) {
        alert("No se permiten caracteres especiales como $, @ o #.");
        event.preventDefault();
        return;
    }

    if (startsWithNumber.test(name) || startsWithNumber.test(message)) {
        alert("Ningún campo puede comenzar con un número.");
        event.preventDefault();
        return;
    }

    alert("Formulario enviado correctamente.");
});

window.onload = function () {
    if (localStorage.getItem("cookiesAceptadas") === "true") {
        document.getElementById("cookiesId").style.display = "none";
}};

function aceptarCookies() {
    document.getElementById("cookiesId").style.display = "none";
    localStorage.setItem("cookiesAceptadas", "true");
}
function rechazarCookies() {
    document.getElementById("cookiesId").style.display = "none";
    localStorage.setItem("cookiesAceptadas", "false");
}