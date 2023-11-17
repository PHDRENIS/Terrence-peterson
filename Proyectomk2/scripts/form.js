function agendarCita() {
    var loading = document.getElementById('loading');
    var alert = document.getElementById('alert');

    // Mostrar el elemento de carga
    loading.style.display = 'block';

    // Simular un retraso (puedes reemplazar esto con tu lógica de agendamiento real)
    setTimeout(function () {
        // Ocultar el elemento de carga
        loading.style.display = 'none';

        // Mostrar la alerta
        alert.innerHTML = '¡Cita agendada!,espera la confirmacion del psicologo :3';
        alert.style.display = 'block';

        // Ocultar la alerta después de un tiempo (por ejemplo, 3 segundos)
        setTimeout(function () {
            alert.style.display = 'none';
        }, 3000);
    }, 2000); // Simulando un retraso de 2 segundos
}

function regresar() {
    window.location.href = "profe.html"; 
}