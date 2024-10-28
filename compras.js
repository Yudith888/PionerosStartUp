window.onload = function() {
    const cartItemsContainer = document.getElementById('cartItems'); // Contenedor para los elementos del carrito
    const totalPriceContainer = document.getElementById('totalPrice'); // Contenedor para el precio total
    const emptyCartButton = document.getElementById('emptyCart'); // Botón para vaciar el carrito
    const checkoutButton = document.getElementById('checkout'); // Botón para proceder al pago

    // Función para cargar los productos del carrito
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener el carrito del localStorage o un array vacío
        let totalPrice = 0; // Inicializar el precio total
        cartItemsContainer.innerHTML = ''; // Limpiar el contenedor de artículos

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>'; // Mensaje si el carrito está vacío
        } else {
            // Iterar sobre cada artículo en el carrito
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`; // Crear elemento con el nombre y precio del artículo
                cartItemsContainer.appendChild(itemElement); // Agregar el artículo al contenedor
                totalPrice += item.price; // Sumar el precio del artículo al total
            });
        }

        // Mostrar el precio total
        totalPriceContainer.innerHTML = `<h2>Total: $${totalPrice}</h2>`;
    }

    // Cargar el carrito al iniciar
    loadCart();

    // Lógica para vaciar el carrito
    emptyCartButton.onclick = function() {
        localStorage.removeItem('cart'); // Eliminar el carrito del localStorage
        loadCart(); // Volver a cargar el carrito (vacío)
        alert('El carrito ha sido vaciado.'); // Notificación al usuario
    };

    // Lógica para el botón de proceder al pago
    checkoutButton.onclick = function() {
        alert('Procediendo al pago...'); // Notificación de inicio de proceso de pago
        // Aquí se podría añadir lógica para redirigir al usuario a la página de pago
    };
}
