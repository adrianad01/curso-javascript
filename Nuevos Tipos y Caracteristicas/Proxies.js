// Definición del objeto 'persona' con propiedades vacías por defecto
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// Definición del manejador para el proxy
const manejador = {
  // Definición de la función 'set' para interceptar la asignación de propiedades
  set(obj, prop, valor) {
    // Verificar si la propiedad existe en el objeto 'persona'
    if (Object.keys(obj).indexOf(prop) === -1) {
      // Si la propiedad no existe, imprimir un mensaje de error
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona`
      );
    }
    // Asignación del valor a la propiedad del objeto
    obj[prop] = valor;
  },
};

// Creación del proxy 'adrian' que envuelve al objeto 'persona' usando el manejador definido
const adrian = new Proxy(persona, manejador);

// Asignación de valores a las propiedades del objeto 'adrian' a través del proxy
adrian.nombre = "Adrián";
adrian.apellido = "Alcocer";
adrian.edad = 23;
adrian.mail = "jadrianaldo@outlook.com"; // Intento de asignación a una propiedad inexistente

// Imprimir el objeto 'adrian' después de asignar valores a sus propiedades
console.log(adrian); // Muestra el objeto 'adrian'
console.log(persona); // Muestra el objeto 'persona', para verificar si las asignaciones también afectaron al objeto original
