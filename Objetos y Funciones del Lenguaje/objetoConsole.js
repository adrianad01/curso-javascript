// Imprime el objeto console
console.log(console);

// Imprime un mensaje de error
console.error("Esto es un error");

// Imprime un mensaje de advertencia
console.warn("Esto es un warning");

// Imprime un mensaje informativo
console.info("Esto es un mensaje informativo");

// Imprime un registro de lo que ha pasado en la aplicación
console.log("Un registro de lo que ha pasado en la aplicación");

// Define variables y las imprime
let nombre = "Adrian",
  apellido = "Alcocer",
  edad = 22;
console.log(nombre);
console.log(apellido);
console.log(edad);

// Imprime un mensaje utilizando template literals
console.log(`Hola, soy ${nombre} ${apellido} y tengo ${edad} años`);

// Imprime un mensaje utilizando sustituciones de formato
console.log(`Hola, soy %s %s y tengo %d años`, nombre, apellido, edad);

// Borra la consola (comentario para evitar la limpieza de la consola en este contexto)
// console.clear();

// Imprime el objeto window y document
console.log(window);
console.log(document);

// Imprime el objeto window y document en forma de árbol
console.dir(window);
console.dir(document);

// Borra la consola
console.clear();

// Agrupa mensajes en la consola
console.group("Lenguajes de Programación");
console.log("JS");
console.log("PHP");
console.log("C");
console.log("Java");
console.groupEnd();

// Agrupa mensajes colapsados en la consola
console.groupCollapsed("Lenguajes de Programación");
console.log("JS");
console.log("PHP");
console.log("C");
console.log("Java");
console.groupEnd();

// Borra la consola
console.clear();

// Imprime el objeto console
console.log(console);

// Muestra los datos del objeto console en forma de tabla
console.table(Object.entries(console).sort());

// Borra la consola
console.clear();

// Muestra los arrays en forma de tabla
const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);

// Muestra un objeto en forma de tabla
const perro = {
  nombre: "Candy",
  edad: 10,
  raza: "Chihuahueña",
};
console.table(perro);

// Borra la consola
console.clear();

// Mide el tiempo que tarda en ejecutarse un código
console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi código");

// Borra la consola
console.clear();

// Imprime el valor de i y cuenta cuántas veces se ha llamado a console.count("Código")
for (let i = 0; i < 100; i++) {
  console.count("Código");
  console.log(i);
}

// Borra la consola
console.clear();

// Comprueba una condición y muestra un mensaje de aserción si la condición es falsa
let x = 4,
  y = 3;
let pruebaXY = "Se espera que x sea siempre mayor a y";
console.assert(x < y, { x, y, pruebaXY });
