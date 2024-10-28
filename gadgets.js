// Crear una nueva instancia de Swiper para el slider en el elemento con clase 'tranding-slider'
var TrandingSlider = new Swiper('.tranding-slider', {
  // Define el efecto de transición como 'coverflow', que hace que las diapositivas tengan un efecto 3D de desbordamiento
  effect: 'coverflow',
  
  // Permite que el cursor 'agarre' el slider para moverlo al hacer clic y arrastrar
  grabCursor: true,

  // Centra la diapositiva activa en el contenedor
  centeredSlides: true,

  // Habilita el bucle infinito, permitiendo que el slider continúe desde el inicio al final
  loop: true,

  // Establece que el número de diapositivas visibles depende del ancho del contenedor
  slidesPerView: 'auto',

  // Configura los efectos de estilo para el efecto 'coverflow'
  coverflowEffect: {
      // Ángulo de rotación de las diapositivas; aquí está en 0 para que no haya rotación
      rotate: 0,
      
      // Separación entre las diapositivas en el eje horizontal
      stretch: 0,
      
      // Profundidad de las diapositivas en el efecto 3D
      depth: 100,
      
      // Factor de modificación para controlar el efecto; cuanto más alto, más pronunciado el efecto 3D
      modifier: 2.5,
  },

  // Configuración de la paginación (pequeños puntos de navegación)
  pagination: {
      // Selecciona el elemento que contiene la paginación
      el: '.swiper-pagination',
      
      // Permite que los puntos de paginación sean clicables
      clickable: true,
  },

  // Configuración de los botones de navegación (siguiente y anterior)
  navigation: {
      // Selecciona el botón para ir a la diapositiva siguiente
      nextEl: '.swiper-button-next',
      
      // Selecciona el botón para ir a la diapositiva anterior
      prevEl: '.swiper-button-prev',
  }
});
