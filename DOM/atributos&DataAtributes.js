// Imprime en la consola el valor de la propiedad 'lang' del elemento raíz (<html>) del documento actual
console.log(document.documentElement.lang);

// Imprime en la consola el valor de la propiedad 'lang' del elemento raíz (<html>) del documento actual, utilizando getAttribute()
console.log(document.documentElement.getAttribute("lang"));

// Imprime en la consola el valor del atributo 'href' del primer elemento que coincida con la clase 'link-dom'
console.log(document.querySelector(".link-dom").href);

// Imprime en la consola el valor del atributo 'href' del primer elemento que coincida con la clase 'link-dom', utilizando getAttribute()
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Establece el valor de la propiedad 'lang' del elemento raíz (<html>) del documento actual como 'en'
document.documentElement.lang = "en";
// Imprime en la consola el nuevo valor de la propiedad 'lang'
console.log(document.documentElement.lang);

// Establece el valor del atributo 'lang' del elemento raíz (<html>) del documento actual como 'es-MX', utilizando setAttribute()
document.documentElement.setAttribute("lang", "es-MX");
// Imprime en la consola el nuevo valor de la propiedad 'lang'
console.log(document.documentElement.lang);

// Selecciona el primer elemento que coincida con la clase 'link-dom' y lo asigna a la variable linkDOM
const $linkDOM = document.querySelector(".link-dom");

// Establece el atributo 'target' del elemento linkDOM como '_blank'
$linkDOM.setAttribute("target", "_blank");

// Establece el atributo 'rel' del elemento linkDOM como 'noopener'
$linkDOM.setAttribute("rel", "noopener");

// Cambia el valor del atributo 'href' del elemento linkDOM a 'https://youtube.com/jonmircha'
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

// Verifica si el elemento linkDOM tiene el atributo 'rel' y lo imprime en la consola
console.log($linkDOM.hasAttribute("rel"));

// Elimina el atributo 'rel' del elemento linkDOM
$linkDOM.removeAttribute("rel");

// Verifica nuevamente si el elemento linkDOM tiene el atributo 'rel' y lo imprime en la consola
console.log($linkDOM.hasAttribute("rel"));

// Imprime en la consola el valor del atributo 'data-description' del elemento linkDOM
console.log($linkDOM.getAttribute("data-description"));

// Imprime en la consola el objeto dataset del elemento linkDOM, que contiene todos los atributos de datos
console.log($linkDOM.dataset);

// Imprime en la consola el valor del atributo de datos 'description' del elemento linkDOM
console.log($linkDOM.dataset.description);

// Establece el valor del atributo de datos 'description' del elemento linkDOM como 'Modelo de Objeto del Documento'
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");

// Imprime en la consola el nuevo valor del atributo de datos 'description' del elemento linkDOM
console.log($linkDOM.dataset.description);

// Cambia el valor del atributo de datos 'description' del elemento linkDOM a 'Suscribete a mi canal y comparte'
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";

// Imprime en la consola el nuevo valor del atributo de datos 'description' del elemento linkDOM
console.log($linkDOM.dataset.description);

