/*Escribir una función llamada saludar que tome un nombre como 
argumentoy devuelva un saludo que incluya ese nombre.*/
const saludar = function (nombre) {
    console.log(`Hola, mi nombre es ${nombre}`);
}
saludar("Adrián");

/*Escribir una función llamada calcularEdad que tome un año de 
nacimiento como argumento y devuelva la edad correspondiente.*/
const calcularEdad = function (year){
    console.log(`Mi año de nacimiento es el ${year}`)
    let edad = 2023 - year;
    console.log(`Mi edad es: ${edad}`);
}
calcularEdad(2001);

/*Escribir una función llamada invertirPalabra que tome una cadena como 
argumento y devuelva la cadena invertida.*/

function invertirPalabra(palabra) {
    // Divide la palabra en un arreglo de caracteres
    var caracteres = palabra.split('');
    // Invierte el orden de los caracteres
    var caracteresInvertidos = caracteres.reverse();
    // Une los caracteres invertidos para formar la palabra invertida
    var palabraInvertida = caracteresInvertidos.join('');
    // Retorna la palabra invertida
    return palabraInvertida;
}

var palabraOriginal = "Hola Mundo";
var palabraInvertida = invertirPalabra(palabraOriginal);
console.log("Palabra original: " + palabraOriginal);
console.log("Palabra invertida: " + palabraInvertida);

/* Escribir una función llamada reemplazarEspacios que tome una cadena
como argumento y devuelva la misma cadena 
con todos los espacios reemplazados por guiones bajos.*/

// Función para reemplazar espacios por guiones bajos
const reemplazarEspacios = function (cadena) {
    // Utilizamos el método split() para dividir la cadena en un arreglo de palabras
    // Luego usamos el método join() para unir las palabras con guiones bajos en lugar de espacios
    return cadena.split(" ").join("_");
}

// Ejemplo de uso de la función
let comentarioOriginal = "Escribir una función llamada reemplazarEspacios que tome una cadena como argumento y devuelva la misma cadena con todos los espacios reemplazados por guiones bajos.";
let comentarioReemplazado = reemplazarEspacios(comentarioOriginal);
console.log("Comentario original:", comentarioOriginal);
console.log("Comentario con espacios reemplazados:", comentarioReemplazado);


/* Crea una función llamada numeroMayor() que toma tres números como entrada
 y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».*/

const numeroMayor = function() {
    let numero1 = window.prompt("Ingrese el primer número")
    let numero2 = window.prompt("Ingrese el segundo número")
    let numero3 = window.prompt("Ingrese el tercer número")

    if (numero1 > numero2 && numero1 > numero3) {
        console.log(`El número mayor es el ${numero1}`)
    } else if (numero1 < numero2 && numero2 > numero3) {
        console.log(`El número mayor es el ${numero2}`)
    } else if (numero1 < numero3  && numero2 < numero3) {
        console.log(`El número mayor es el ${numero3}`)
    } else  {
        console.log("Son iguales")
    } 
}
numeroMayor();