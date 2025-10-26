//Evento del registro 
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const form = document.querySelector('#form-registro');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (pass.value === pass2.value) {
        // Si las contraseñas coinciden, se puede enviar el formulario
        form.submit();
    } else {
        alert('Las contraseñas no coinciden');
    }
});