// Importa el módulo "menu_hamburguesa.js" y lo asigna a la variable hamburguerMenu
import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";

// Obtiene el documento actual y lo asigna a la variable d
const d = document;

// Añade un event listener que escucha el evento "DOMContentLoaded" del documento
d.addEventListener("DOMContentLoaded", (e) => {
  // Llama a la función hamburguerMenu, pasando los selectores ".panel-btn", ".panel" y ".menu a" como argumentos
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  countdown("countdown", "May 3, 2024 00:00:00", "Feliz Cumpleaños amigo");
  scrollTopButton(".scroll-top-btn")
});