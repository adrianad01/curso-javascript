console.log(console);
console.error("Esto es un error");
console.warn("Esto es un warning");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en la aplicación");

let nombre = "Adrian",
  apellido = "Alcocer",
  edad = 22;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(`Hola, soy ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola, soy %s %s y tengo %d años`, nombre, apellido, edad);
// console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.clear();

console.group("Lenguajes de Programación");
console.log("JS");
console.log("PHP");
console.log("C");
console.log("Java");
console.groupEnd();

console.groupCollapsed("Lenguajes de Programación");
console.log("JS");
console.log("PHP");
console.log("C");
console.log("Java");
console.groupEnd();

console.clear();

console.log(console);
//Muestra los datos en table (el metodo .sort() permite ordenar en orden alfabetico)
console.table(Object.entries(console).sort());

console.clear();

const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
  nombre: "Candy",
  edad: 10,
  raza: "Chihuahueña",
};

console.table(perro);

console.clear();

console.time("Cuanto tiempo tarda mi código");

const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi código");
//console.log(arreglo)

console.clear();

for (let i = 0; i < 100; i++) {
  console.count("Código");
  console.log(i);
}

console.clear();

let x = 4,
  y = 3;
let pruebaXY = "Se espera que x sea siempre mayor a y";
console.assert(x < y, { x, y, pruebaXY });
