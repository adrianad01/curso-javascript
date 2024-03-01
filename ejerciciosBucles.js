// Utiliza un bucle para imprimir todos los números pares del 1 al 20.

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// Utiliza un bucle para sumar todos los números del 1 al 100 y luego muestra el resultado.
let sumaNumeros = 0;
for(let i = 1; i<=100; i++){
    sumaNumeros += i;
}
console.log("la suma de los números es: "+sumaNumeros)

// Pide al usuario un número y luego imprime la tabla de multiplicar de ese número hasta 10.

let resultado = 0;
let numero = window.prompt("Ingrese un número");
for (let i = 0; i <= 10; i++) {
    resultado = numero * i;
    console.log(`La tabla de multiplicar del número ${numero} es ${numero} * ${i} = ${resultado}`);
}

// Pide al usuario una cadena de texto y luego imprímela en orden inverso utilizando un bucle.
let cadena = "Hola Mundo";
let cadenaInvertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
console.log("La cadena invertida es: " + cadenaInvertida);
