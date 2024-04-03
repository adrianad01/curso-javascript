// Importa el módulo "menu_hamburguesa.js" y lo asigna a la variable hamburguerMenu
import hamburguerMenu from "./menu_hamburguesa.js";

// Obtiene el documento actual y lo asigna a la variable d
const d = document;

// Añade un event listener que escucha el evento "DOMContentLoaded" del documento
d.addEventListener("DOMContentLoaded", (e) => {
  // Llama a la función hamburguerMenu, pasando los selectores ".panel-btn", ".panel" y ".menu a" como argumentos
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
});
