// Selecciona el elemento del DOM con el id "que-es" y lo asigna a la variable $whatisDOM
const $whatisDOM = document.getElementById("que-es");

// Define un string de texto con formato HTML que se utilizará para actualizar el contenido del elemento $whatisDOM
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// Asigna el texto al contenido del elemento $whatisDOM utilizando la propiedad innerText
// $whatisDOM.innerText = text;

// Asigna el texto al contenido del elemento $whatisDOM utilizando la propiedad textContent
$whatisDOM.textContent = text;

// Asigna el texto al contenido HTML del elemento $whatisDOM utilizando la propiedad innerHTML
$whatisDOM.innerHTML = text;

// Reemplaza completamente el elemento $whatisDOM con el texto, lo cual no es una práctica recomendada
$whatisDOM.outerHTML = text;
