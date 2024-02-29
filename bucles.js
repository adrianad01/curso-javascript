// While
let contador = 0;
while (contador < 10) {
    console.log("While: " + contador);
    contador ++;
}

//Do While
let contador2 = 0;
do {
    console.log("Do While: " +contador2);
    contador2 ++;
} while (contador2 < 10);

// For
for (let i = 0; i < 10; i++) {
    console.log("for: " +i); 
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);  
}

//For In: Se utiliza más en objetos
const adrian = {
    name: "Adrián",
    lastName: "Alcocer",
    age: 22
}
for (const propiedad in adrian) {
    console.log(`Key: ${propiedad}, Value: ${adrian[propiedad]}`);
}

//For Of: Se utiliza más en arrays
for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola Mundo";
for (const iterator of cadena) {
    console.log(iterator)
}
