window.onload = function() {
    // Elimina la clase "container" del body
    document.body.classList.remove("container");

    // Intenta reproducir la música de fondo
    var audio = document.getElementById('background-music');
    audio.muted = false;  // Desmutear el audio si está silenciado
    audio.play().catch(function(error) {
        console.log("No se pudo reproducir el audio:", error);
    });
};