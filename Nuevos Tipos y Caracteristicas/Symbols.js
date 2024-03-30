// Crear dos símbolos distintos con descripciones diferentes
let id = Symbol("id");
let id2 = Symbol("id2");

// Comprobar si los símbolos son iguales (siempre serán falsos porque cada símbolo es único)
console.log(id === id2); // false

// Mostrar los valores de los símbolos y sus tipos
console.log(id, id2); // Muestra algo como "Symbol(id)" y "Symbol(id2)"
console.log(typeof id, typeof id2); // "symbol" para ambos

// Crear dos constantes con símbolos para usar como claves de propiedad en un objeto
const NOMBRE = Symbol("Nombre");
const SALUDAR = Symbol("Saludar");

// Crear un objeto 'persona' con una propiedad cuya clave es un símbolo
const persona = {
  [NOMBRE]: "Adrián", // Se usa la clave 'NOMBRE' como símbolo para hacerla "pseudo-privada"
};

// Mostrar el objeto persona
console.log(persona); // Mostrará { [Symbol(Nombre)]: 'Adrián' }

// Intentar cambiar la propiedad NOMBRE (pero no se cambia realmente)
persona.NOMBRE = "Jesús";
console.log(persona); // Aunque se intentó cambiar, sigue mostrando { [Symbol(Nombre)]: 'Adrián' }

// Acceder a la propiedad NOMBRE (no se cambió realmente)
console.log(persona.NOMBRE); // Mostrará "Jesús"
console.log(persona[NOMBRE]); // Mostrará "Adrián"

// Añadir una nueva propiedad al objeto persona con una clave de símbolo y un valor de función
persona[SALUDAR] = function () {
  console.log("Hola");
};

// Mostrar el objeto persona después de añadir la propiedad SALUDAR
console.log(persona); // Mostrará algo como { [Symbol(Nombre)]: 'Adrián', [Symbol(Saludar)]: [Function: anonymous] }

// Llamar al método SALUDAR del objeto persona
persona[SALUDAR](); // Mostrará "Hola"

// Iterar sobre las propiedades del objeto persona (solo se mostrarán las propiedades no-símbolo)
for (let propiedad in persona) {
  console.log(propiedad); // Solo mostrará "NOMBRE" ya que es la única propiedad no-símbolo
  console.log(persona[propiedad]); // Mostrará "Adrián"
}

// Obtener todas las propiedades de símbolo del objeto persona
console.log(Object.getOwnPropertySymbols(persona)); // Mostrará [Symbol(Saludar)]



