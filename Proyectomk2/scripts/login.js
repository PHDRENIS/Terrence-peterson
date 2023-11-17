
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        // Redirigir a la página index.html
        window.location.href = "hola.html";
    });


    document.getElementById("registroLink").addEventListener("click", function() {
        window.location.href = "registro.html"; // Cambia "registro.html" por la URL correcta de la página de registro
    });
});