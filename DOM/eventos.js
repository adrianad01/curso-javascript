// Función que muestra un alert y registra un mensaje en la consola al ser invocada
function holaMundo() {
  alert("Esto es un evento de tipo onClick");
  console.log(event);
}

// Función que saluda con un nombre dado o "Desconocido" por defecto, y registra un mensaje en la consola
function saludar(nombre = "Desconocido") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

// Seleccionar elementos del DOM por su ID
const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

// Asignar función holaMundo() como manejador de evento onClick para $eventoSemantico
$eventoSemantico.onclick = holaMundo;

// Reemplazar manejador de evento onClick con una función anónima que muestra un alert al hacer clic en $eventoSemantico
$eventoSemantico.onclick = function (e) {
  alert("Esto es un evento de tipo onClick con manejador de eventos semántico");
  console.log(e); // Mostrar el evento pasado como argumento
  console.log(event); // Mostrar el evento global
};

// Agregar múltiples manejadores de eventos click a $eventoMultiple
$eventoMultiple.addEventListener("click", holaMundo); // Mostrar un alert y registrar un mensaje en la consola
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos múltiple"); // Mostrar un alert
  console.log(e); // Mostrar el evento pasado como argumento
  console.log(e.type); // Mostrar el tipo de evento
  console.log(e.target); // Mostrar el elemento que desencadenó el evento
  console.log(event); // Mostrar el evento global
});

// Agregar dos funciones saludar() como manejadores de eventos click a $eventoMultiple
$eventoMultiple.addEventListener("click", () => {
  saludar(); // Saludar como "Desconocido"
  saludar("Adrián"); // Saludar como "Adrián"
});

// Definir una función para remover el evento dblclick en $eventoRemover
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de ${e.type}`); // Mostrar un alert indicando que se está removiendo el evento
  console.log(e); // Mostrar el evento pasado como argumento
  $eventoRemover.removeEventListener("dblclick", removerDobleClick); // Remover el manejador de evento dblclick
  $eventoRemover.disabled = true; // Deshabilitar el elemento
};

// Agregar el manejador de evento dblclick a $eventoRemover
$eventoRemover.addEventListener("dblclick", removerDobleClick);

/*
  Flujo de eventos (Burbuja y captura)
  */

const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

// Función para manejar el flujo de eventos en los elementos div
function flujoEventos(e) {
    console.log(
      `Hola te saluda ${this} el click lo originó ${e.target.className}`
    );
    //e.stopPropagation();
  }
  
  document.addEventListener("click", (e) => {
    if (e.target.matches(".eventos-flujo div")) {
      flujoEventos(e);
    }
  
    if (e.target.matches(".eventos-flujo a")) {
      alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
      e.preventDefault();
      //e.stopPropagation();
    }
  });
