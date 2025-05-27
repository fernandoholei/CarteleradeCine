const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('header-scroll', window.scrollY > 50);
});

document.querySelector('.logo-link').addEventListener('mouseover', () => {
    gsap.to('.logo-link', {duration: 0.3, scale: 1.05, ease: "power2.out"});
});

document.querySelector('.logo-link').addEventListener('mouseout', () => {
    gsap.to('.logo-link', {duration: 0.3, scale: 1, ease: "power2.out"});
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
    const estadoCookies = localStorage.getItem("cookiesAceptadas");

    if (estadoCookies === "true") {
        document.getElementById("cookiesId").style.display = "none";
    }else {
        document.getElementById("cookiesId").style.display = "none";
    }
};

window.onload = function () {
    if (localStorage.getItem("cookiesAceptadas") === "true") {
        document.getElementById("cookiesId").style.display = "none";
}};

function aceptarCookies() {
    document.getElementById("cookiesId").style.display = "none";
    localStorage.setItem("cookiesAceptadas", "true");
}



