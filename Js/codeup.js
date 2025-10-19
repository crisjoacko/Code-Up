// Hace que el movimiento del HTML sea suave cuando hay un click en el "Empezar a aprender"
window.addEventListener("load", () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
    }
});

// Evento para el botón "Iniciar Sesión"
const logueate = document.querySelector('#btn-lg');
logueate.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "registro.html";
});
