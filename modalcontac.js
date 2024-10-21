 // Función para abrir la ventana modal
 function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

// Función para cerrar la ventana modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Cerrar la ventana modal al hacer clic fuera del contenido
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }

    }
    }

    