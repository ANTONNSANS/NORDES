// Muestra un mensaje cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada completamente');
});

// Muestra un mensaje al hacer clic en un botón
function mostrarMensaje() {
    alert('¡Has hecho clic en el botón!');
} 
             <li><a href="#" onclick="window.location.href='https://northkb.com/'">NORTH Action Sports</a></li>
<script>
    document.getElementById('infoForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Recoger los datos ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const deportes = document.getElementById('deportes').value;
        const dni = document.getElementById('dni').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;

        // Aquí podrías hacer lo que necesites con los datos (enviarlos a un servidor, etc.)
        // Por ahora, los mostraremos en un alert como ejemplo
        alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\nDeportes: ${deportes}\nDNI: ${dni}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
    });
</script>
