// Función para abrir la ventana modal
function openModal() {
    // Cambia el estilo de la ventana modal para que se muestre como un contenedor flexible (flex)
    document.getElementById("myModal").style.display = "flex";
}

// Función para cerrar la ventana modal
function closeModal() {
    // Cambia el estilo de la ventana modal para ocultarla
    document.getElementById("myModal").style.display = "none";
}

// Cerrar la ventana modal al hacer clic fuera del contenido
window.onclick = function(event) {
    // Obtiene el elemento modal por su ID
    var modal = document.getElementById("myModal");
    // Verifica si el área clicada es la ventana modal (es decir, el fondo oscuro)
    if (event.target == modal) {
        // Si es así, oculta la ventana modal
        modal.style.display = "none";
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    // Obtiene todos los elementos con la clase 'modal'
    var modals = document.getElementsByClassName('modal');
    // Itera sobre cada modal encontrado
    for (var i = 0; i < modals.length; i++) {
        // Verifica si el área clicada es uno de los modales
        if (event.target == modals[i]) {
            // Si es así, oculta ese modal específico
            modals[i].style.display = "none";
        }
    }
}
