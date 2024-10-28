class Carousel {
  // Método estático que identifica la tarjeta específica al hacer hover.
  static getDest(element) {
    // Verifica que el elemento sea una instancia de Element
    if (!(element instanceof Element)) return;
    if (element === document.documentElement) return; // Verifica que no sea el elemento raíz del documento
    if (element.classList.contains("cards")) return element; // Si es una tarjeta, la retorna
    return Carousel.getDest(element.parentElement); // Llama recursivamente con el elemento padre
  }

  // Constructor de la clase Carousel
  constructor(element) {
    this.wrapperElement = element; // Define el elemento contenedor
    this.dests = [...element.querySelectorAll(".cards")]; // Selecciona todas las tarjetas dentro del contenedor
    this.active = null; // Inicializa la tarjeta activa
    this.update(); // Llama al método update para establecer el estado inicial
    this.wrapperElement.classList.remove("loading"); // Remueve la clase de carga

    // Evento al pasar el ratón sobre el contenedor
    this.wrapperElement.addEventListener("mouseover", (event) => {
      const dest = Carousel.getDest(event.target); // Obtiene la tarjeta objetivo
      if (typeof dest === "undefined") return;
      if (dest === this.dests[this.active]) return; // Ignora si es la tarjeta activa
      this.activate(dest); // Activa la tarjeta seleccionada
    });
  }

  // Obtiene el índice de una tarjeta específica en el contenedor
  getIndex(dest) {
    if (!this.dests.includes(dest)) return; // Si no está en el contenedor, retorna nada
    let i = 0;
    for (let currentDest of this.dests) {
      if (dest === currentDest) { // Retorna el índice cuando encuentra la tarjeta
        return i;
      }
      i++;
    }
  }

  // Activa una tarjeta específica
  activate(dest) {
    this.active = this.getIndex(dest) ?? null; // Define la tarjeta activa
    this.update(); // Actualiza el estado de las tarjetas
  }

  // Actualiza las clases de cada tarjeta según si está activa, plegada o desplegada
  update() {
    this.dests.forEach((dest, index) => {
      dest.className = "cards"; // Reinicia las clases

      if (index === this.active) {
        dest.classList.add("unfolded", isOdd(index) ? "back" : "front"); // Clase de desplegada
      } else {
        dest.classList.add("folded"); // Clase de plegada

        // Determina la dirección (derecha o izquierda) de las tarjetas plegadas
        if (this.active === null || index < this.active) {
          dest.classList.add(isOdd(index) ? "right" : "left");
        } else if (index > this.active) {
          dest.classList.add(isOdd(index) ? "left" : "right");
        }
      }
    });
  }
}

// Función auxiliar para verificar si un valor es impar
function isOdd(value) {
  return value % 2 === 0; // Retorna verdadero si es impar (paridad)
}

// Instancia de la clase Carousel para el contenedor con la clase "wrapper"
const carousel = new Carousel(document.querySelector(".wrapper"));
