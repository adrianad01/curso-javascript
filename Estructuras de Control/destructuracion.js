//DESTRUCTURACIÓN

//Sin destructuración
const numeros = [1,2,3];

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

//Con destructuración

const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre: "jesús",
    apellido: "alcocer",
    edad: 22
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);