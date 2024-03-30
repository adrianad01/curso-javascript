// Imprime en la consola "Elementos del documento"
console.log("Elementos del documento");

// Imprime en la consola todo el objeto documento
console.log(document);

// Imprime en la consola la etiqueta <head> del documento HTML
console.log(document.head);

// Imprime en la consola la etiqueta <body> del documento HTML
console.log(document.body);

// Imprime en la consola el elemento raíz del documento HTML (<html>)
console.log(document.documentElement);

// Imprime en la consola la declaración de tipo del documento HTML
console.log(document.doctype);

// Imprime en la consola la codificación de caracteres del documento HTML
console.log(document.charset);

// Imprime en la consola el título del documento HTML
console.log(document.title);

// Imprime en la consola todos los enlaces (<a>) del documento HTML
console.log(document.links);

// Imprime en la consola todas las imágenes (<img>) del documento HTML
console.log(document.images);

// Imprime en la consola todos los formularios (<form>) del documento HTML
console.log(document.forms);

// Imprime en la consola todas las hojas de estilo del documento HTML
console.log(document.styleSheets);

// Imprime en la consola todos los scripts (<script>) del documento HTML
console.log(document.scripts);

// Después de 3 segundos, imprime en la consola el texto seleccionado en el documento
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

// Escribe en el documento HTML un encabezado de segundo nivel
// document.write("<h2>Hola Mundo desde el DOM</h2>");



