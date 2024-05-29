// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Por favor completa todos los campos del formulario.');
        event.preventDefault(); // Evitamos que se envíe el formulario si hay campos vacíos
    }
});
