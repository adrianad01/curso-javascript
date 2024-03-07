//ARRAYS
let a = [];
let b = [1, true, "Hola", ["a", "b", "c"]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);

//Método 2
let c = Array.of(1, 2, 3, 4, 5, "a", "b", [6, 7, 8, 9, 10]);
console.log(c);
console.log(c[7][3]);

//Crear un arreglo de 100 caracteres similares
let d = Array(100).fill("A");
console.log(d);

let colores = ["rojo", "azul", "blanco"];
console.log(colores);

colores.push("negro"); //Agrega elementos a un arreglo
console.log(colores);

colores.pop(); //Elimina el último elemento del arreglo
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id=${index}>${el}</li>`);
});

//Ejemplo de práctica
console.log("***********************");
let equiposFutbol = ["Cruz Azul", "Monterrey", "Chivas"];
console.log(equiposFutbol);
console.log(equiposFutbol[1]);
equiposFutbol.push("América")
console.log(equiposFutbol);
equiposFutbol.pop("América");
console.log(equiposFutbol);
equiposFutbol.forEach (function (elemento, indice, array){
    console.log(elemento, indice);
});
equiposFutbol.unshift("Pumas")
console.log(equiposFutbol);
equiposFutbol.shift("Pumas");
console.log(equiposFutbol);