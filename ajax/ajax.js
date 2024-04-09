(() => {
  // Inicio de una función de flecha autoejecutable (IIFE) para mantener el ámbito local
  const xhr = new XMLHttpRequest(), // Creación de un nuevo objeto XMLHttpRequest
    $xhr = document.getElementById("xhr"), // Selección del elemento HTML con el id "xhr"
    $fragment = document.createDocumentFragment(); // Creación de un fragmento de documento para mejorar el rendimiento de la manipulación del DOM

  xhr.addEventListener("readystatechange", (e) => {
    // Agregando un evento 'readystatechange' al objeto XMLHttpRequest
    if (xhr.readyState !== 4) return; // Comprobación si la solicitud ha sido completada

    if (xhr.status >= 200 && xhr.status < 300) {
      // Verificando si la solicitud fue exitosa
      // console.log("Ingreso correcto"); // Mensaje de éxito en la consola
      let json = JSON.parse(xhr.responseText); // Parsing del texto de respuesta como JSON
      //console.log(json); // Imprimiendo los datos obtenidos en la consola

      json.forEach((el) => {
        // Iterando sobre cada elemento del array JSON obtenido
        const $li = document.createElement("li"); // Creación de un elemento <li>
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // Asignación del contenido HTML del <li> con datos del objeto JSON
        $fragment.appendChild($li); // Agregando el <li> al fragmento de documento
      });

      $xhr.appendChild($fragment); // Agregando el fragmento al elemento HTML seleccionado
    } else {
      // Si la solicitud no fue exitosa
      // console.error("Error"); // Imprimir un mensaje de error en la consola
      let message = xhr.statusText || "Ocurrió un error"; // Obtención del mensaje de estado de la solicitud o mensaje predeterminado
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`; // Mostrar el mensaje de error en el elemento HTML seleccionado
    }
    //console.log("Este mensaje cargará de cualquier forma"); // Mensaje de carga independiente del resultado de la solicitud
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Configuración de la solicitud GET a la URL proporcionada
  xhr.send(); // Envío de la solicitud
})(); // Fin de la función de flecha autoejecutable

(() => {
  // Inicio de una función de flecha autoejecutable (IIFE) para mantener el ámbito local
  const $fetch = document.getElementById("fetch"), // Selección del elemento HTML con el id "xhr"
    $fragment = document.createDocumentFragment(); // Creación de un fragmento de documento para mejorar el rendimiento de la manipulación del DOM

  fetch("https://jsonplaceholder.typicode.com/user")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      //   $fetch.innerHTML = json;
    })
    .catch((err) => {
      console.log("Estamos en el catch", err);
      let message = fetch.statusText || "Ocurrió un error"; // Obtención del mensaje de estado de la solicitud o mensaje predeterminado
      $fetch.innerHTML = `Error ${fetch.status}: ${message}`; // Mostrar el mensaje de error en el elemento HTML seleccionado
    })
    .finally(() => console.log("Esto se ejecutará independientemente"));
})(); // Fin de la función de flecha autoejecutable
