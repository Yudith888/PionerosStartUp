// Selecciona el contenedor principal que tiene la clase 'wrapper'
const wrapper = document.querySelector('.wrapper');

// Función para activar el formulario de registro
function registerActive() {
    wrapper.classList.toggle('active'); // Cambia la clase 'active' en el contenedor, lo que puede alternar entre las vistas de inicio de sesión y registro
}

// Función para activar el formulario de inicio de sesión
function loginActive() {
    wrapper.classList.toggle('active'); // Cambia la clase 'active' en el contenedor para alternar entre las vistas
}

// Función para registrar al usuario
function registerUser() {
    // Obtener los valores del formulario de registro
    const name = document.getElementById('registerName').value; // Valor del campo de nombre
    const email = document.getElementById('registerEmail').value; // Valor del campo de email
    const password = document.getElementById('registerPassword').value; // Valor del campo de contraseña

    // Validar que los campos no estén vacíos
    if (name === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos."); // Muestra una alerta si algún campo está vacío
        return; // Sale de la función
    }

    // Guardar los datos en el localStorage (simulando base de datos local)
    localStorage.setItem('userName', name); // Guarda el nombre
    localStorage.setItem('userEmail', email); // Guarda el email
    localStorage.setItem('userPassword', password); // Guarda la contraseña

    // Mensaje de confirmación
    alert("Registro exitoso. Redirigiendo a la página de tecnología...");

    // Redirigir a la página de tecnología 
    window.location.href = 'tecnologia.html'; // Cambia la ubicación actual a la página de tecnología
}

// Función para iniciar sesión del usuario
function iniciosesionUser() {
    // Obtener los valores del formulario de inicio de sesión
    const email = document.getElementById('iniciosesionEmail').value; // Valor del campo de email
    const password = document.getElementById('iniciosesionPassword').value; // Valor del campo de contraseña

    // Validar que los campos no estén vacíos
    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos."); // Muestra una alerta si algún campo está vacío
        return; // Sale de la función
    }

    // Obtener los datos almacenados en localStorage (datos de registro)
    const storedEmail = localStorage.getItem('userEmail'); // Recupera el email almacenado
    const storedPassword = localStorage.getItem('userPassword'); // Recupera la contraseña almacenada

    // Verificar si los datos ingresados coinciden con los almacenados
    if (email === storedEmail && password === storedPassword) {
        // Mensaje de confirmación
        alert("Inicio de sesión exitoso. Redirigiendo a la página de tecnología...");

        // Redirigir a la página de tecnología
        window.location.href = 'tecnologia.html'; // Cambia la ubicación actual a la página de tecnología
    } else {
        // Si los datos no coinciden, mostrar mensaje de error
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo."); // Alerta de error si los datos no coinciden
    }
}
