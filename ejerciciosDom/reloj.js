// Obtiene el documento actual y lo asigna a la variable d
const d = document;

// Exporta una función llamada "digitalClock"
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo; // Variable para almacenar el intervalo del reloj

  // Añade un event listener que escucha el evento "click" en todo el documento
  d.addEventListener("click", (e) => {
    // Verifica si el elemento clickeado coincide con el selector del botón de reproducción
    if (e.target.matches(btnPlay)) {
      // Si es así, inicia un intervalo que actualiza el reloj cada segundo
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString(); // Obtiene la hora actual
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`; // Actualiza el contenido del reloj en el DOM
      }, 1000);
      e.target.disabled = true; // Desactiva el botón de reproducción para evitar múltiples clics
    }
    // Verifica si el elemento clickeado coincide con el selector del botón de parada
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo); // Detiene el intervalo del reloj
      d.querySelector(clock).innerHTML = null; // Limpia el contenido del reloj en el DOM
      document.querySelector(btnPlay).disabled = false; // Habilita el botón de reproducción
    }
  });
}

// Exporta una función llamada "alarm", actualmente vacía
export function alarm() {}
