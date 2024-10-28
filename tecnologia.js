let nextButton = document.getElementById('next');
/* Obtiene el botón de "siguiente" del DOM usando su ID */

let prevButton = document.getElementById('prev');
/* Obtiene el botón de "anterior" del DOM usando su ID */

let carousel = document.querySelector('.carousel');
/* Selecciona el contenedor principal del carrusel usando su clase */

let listHTML = document.querySelector('.carousel .list');
/* Selecciona la lista de elementos dentro del carrusel */

let seeMoreButtons = document.querySelectorAll('.seeMore');
/* Selecciona todos los botones de "Ver más" en el carrusel */

let backButton = document.getElementById('back');
/* Obtiene el botón de "regresar" del DOM usando su ID */

nextButton.onclick = function(){
    showSlider('next');
}
/* Asigna una función al hacer clic en el botón de "siguiente" que llama a showSlider con el parámetro 'next' */

prevButton.onclick = function(){
    showSlider('prev');
}
/* Asigna una función al hacer clic en el botón de "anterior" que llama a showSlider con el parámetro 'prev' */

let unAcceppClick;
/* Declara una variable para controlar el tiempo de espera entre clics y evitar múltiples clics rápidos */

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    /* Desactiva temporalmente los clics en los botones "siguiente" y "anterior" */

    carousel.classList.remove('next', 'prev');
    /* Remueve las clases 'next' y 'prev' del carrusel para reiniciar la animación */

    let items = document.querySelectorAll('.carousel .list .item');
    /* Selecciona todos los elementos del carrusel */

    if(type === 'next'){
        listHTML.appendChild(items[0]);
        /* Si el tipo es 'next', mueve el primer elemento al final de la lista */
        carousel.classList.add('next');
        /* Agrega la clase 'next' para aplicar la animación de avance */
    }else{
        listHTML.prepend(items[items.length - 1]);
        /* Si el tipo es 'prev', mueve el último elemento al inicio de la lista */
        carousel.classList.add('prev');
        /* Agrega la clase 'prev' para aplicar la animación de retroceso */
    }

    clearTimeout(unAcceppClick);
    /* Limpia cualquier temporizador activo para evitar conflictos */

    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
        /* Reactiva los clics en los botones después de 2 segundos */
    }, 2000)
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        /* Remueve cualquier animación previa para mostrar detalles */
        carousel.classList.add('showDetail');
        /* Agrega la clase 'showDetail' para mostrar detalles del elemento seleccionado */
    }
});

backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    /* Remueve la clase 'showDetail' cuando se hace clic en el botón "regresar", volviendo a la vista principal */
}
