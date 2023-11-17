// JavaScript para cambiar el mensaje de bienvenida
var mensajes = [
    "Hola yo soy Terrence Peterson",
    "Espero podamos ser amigos",
    "Recuerda que nadie nace para estar solo",
    "Por que yo soy tu amigo"
];

var indiceMensaje = 0;
var mensajeBienvenida = document.getElementById("mensaje-bienvenida");

// Función para cambiar el mensaje cada 3 segundos
function cambiarMensaje() {
    mensajeBienvenida.textContent = mensajes[indiceMensaje];
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
}

// Cambia el mensaje inicialmente y luego cada 6 segundos
cambiarMensaje();
setInterval(cambiarMensaje, 5000);

function redirigirAIndex() {
    // Redirige a index.html al hacer clic en la imagen
    window.location.href = "index.html";
}