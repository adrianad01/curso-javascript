/*
Los Mapas en JavaScript son estructuras de datos que permiten almacenar pares clave-valor, donde cada clave puede ser de cualquier tipo de dato válido en JavaScript y 
los valores pueden ser cualquier tipo de dato, incluyendo objetos, funciones o incluso otros Mapas. 
*/

/* 
Los Mapas son útiles cuando necesitas asociar datos de manera más flexible que con objetos regulares, 
especialmente cuando las claves son desconocidas hasta el tiempo de ejecución, 
o cuando necesitas mantener el orden de inserción. 
*/

// Se crea un nuevo Mapa
const mapa = new Map();

// Se agregan varias entradas al Mapa utilizando el método set()
mapa.set("Nombre", "Adrián");
mapa.set("Apellido", "Alcocer");
mapa.set("Edad", 22);

// Se imprime el Mapa completo y su tamaño
console.log(mapa);
console.log(mapa.size);

// Se verifica si el Mapa contiene una clave específica y se imprime el resultado
console.log(mapa.has("Correo")); //false
console.log(mapa.has("Nombre")); //true

// Se obtiene y se imprime el valor asociado a la clave "Nombre"
console.log(mapa.get("Nombre"));

// Se actualiza el valor asociado a la clave "Nombre" y se imprime el nuevo valor
mapa.set("Nombre", "Jesús Adrián");
console.log(mapa.get("Nombre"));

// Se elimina una entrada del Mapa por su clave y se imprime el Mapa actualizado
mapa.delete("Apellido");
console.log(mapa);

// Se añaden más entradas al Mapa con claves y valores de diferentes tipos
mapa.set(19, "Diecinueve");
mapa.set(false, "Falso");
mapa.set({}, {});

// Se imprime el Mapa actualizado
console.log(mapa);

// Se itera sobre el Mapa utilizando un bucle for...of y se imprime cada clave y valor
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

// Se crea otro Mapa inicializado con pares clave-valor proporcionados en una matriz
const mapa2 = new Map([
  ["Nombre", "Candy"],
  ["Edad", 10],
  ["Animal", "Perro"],
  [null, "Nulo"],
]);

// Se imprime el segundo Mapa
console.log(mapa2);

// Se obtienen y se imprimen las claves y los valores del segundo Mapa
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
