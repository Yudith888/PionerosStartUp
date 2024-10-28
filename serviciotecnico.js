// Obtiene los elementos de los botones "siguiente" y "anterior"
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Obtiene el contenedor del carrusel y los elementos de cada artículo dentro del carrusel
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;  // Cuenta el número de elementos en el carrusel

// Define las posiciones de los elementos "activo" y los dos siguientes
let active = 1;
let other_1 = null;
let other_2 = null;

// Función para avanzar al siguiente elemento en el carrusel
next.onclick = () => {
    carousel.classList.remove('prev');   // Elimina la clase de animación anterior
    carousel.classList.add('next');      // Agrega la clase de animación "next"
    
    // Actualiza la posición del elemento "activo", reinicia a 0 si alcanza el final
    active = active + 1 >= countItem ? 0 : active + 1;
    
    // Define el primer elemento después del "activo"
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    
    // Define el segundo elemento después del "activo"
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    
    // Llama a la función para aplicar los cambios visuales
    changeSlider();
}

// Función para retroceder al elemento anterior en el carrusel
prev.onclick = () => {
    carousel.classList.remove('next');  // Elimina la clase de animación "next"
    carousel.classList.add('prev');     // Agrega la clase de animación "prev"
    
    // Actualiza la posición del elemento "activo", vuelve al final si está al inicio
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    
    // Define el primer elemento después del "activo" en el sentido contrario
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    
    // Define el segundo elemento después del "activo" en el sentido contrario
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    
    // Llama a la función para aplicar los cambios visuales
    changeSlider();
}

// Función para actualizar visualmente el carrusel
const changeSlider = () => {
    // Encuentra el elemento actualmente activo y elimina su clase "active"
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    // Encuentra el elemento con la clase "other_1" y la elimina
    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    // Encuentra el elemento con la clase "other_2" y la elimina
    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    // Reinicia la animación para todos los elementos en el carrusel
    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;  // Reinicio rápido de la animación
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    // Asigna las nuevas clases a los elementos en sus posiciones correspondientes
    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    // Reinicia el temporizador de reproducción automática
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();  // Simula un clic en el botón "next" cada 5 segundos
    }, 5000);
}

// Establece la reproducción automática para avanzar el carrusel cada 5 segundos
let autoPlay = setInterval(() => {
    next.click();  // Simula un clic en el botón "next"
}, 5000);
