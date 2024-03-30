const json = {
  cadena: "Adrián",
  numero: 35,
  booleano: true,
  arreglo: ["Programar", "Jugar", "Estudiar"],
  objeto: {
    email: "jadrianaldo@outlook.com",
    telefono: "8186580644",
  },
  nulo: null,
};

console.log("*** JSON.parse ***");

// Parsea un objeto vacío
console.log(JSON.parse("{}"));

// Parsea un arreglo
console.log(JSON.parse("[1,2,3]"));

// Parsea un booleano verdadero
console.log(JSON.parse("true"));

// Parsea un booleano falso
console.log(JSON.parse("false"));

// Parsea un número
console.log(JSON.parse("19"));

// Parsea una cadena de texto
console.log(JSON.parse('"Hola Mundo"'));

// Parsea un valor nulo
console.log(JSON.parse("null"));

// No se puede parsear "undefined" con JSON.parse
// console.log(JSON.parse("undefined"));

// Parsea un objeto con propiedades
console.log(JSON.parse('{ "x": 2, "y": 3 }'));

console.log("**************************************************");

console.log("*** JSON.stringify ***");

// Convierte un objeto vacío a una cadena JSON
console.log(JSON.stringify({}));

// Convierte un arreglo a una cadena JSON
console.log(JSON.stringify([1, 2, 3]));

// Convierte un booleano verdadero a una cadena JSON
console.log(JSON.stringify(true));

// Convierte un booleano falso a una cadena JSON
console.log(JSON.stringify(false));

// Convierte un número a una cadena JSON
console.log(JSON.stringify(19));

// Convierte una cadena de texto a una cadena JSON
console.log(JSON.stringify("Hola Mundo"));

// Convierte un valor nulo a una cadena JSON
console.log(JSON.stringify(null));

// Convierte "undefined" a una cadena JSON (será "null")
console.log(JSON.stringify(undefined));

// Convierte un objeto con propiedades a una cadena JSON
console.log(JSON.stringify({ x: 2, y: 3 }));

// Imprime mi archivo JSON
console.log(JSON.stringify(json));

// Imprime el contenido del JSON

