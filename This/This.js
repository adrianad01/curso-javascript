// Imprime el objeto global (en el navegador, esto sería "window")
console.log(this);

// Imprime la referencia al objeto global del navegador
console.log(window);

// Compara si "this" es igual al objeto global del navegador (window)
console.log(this === window);

// Agrega una propiedad "nombre" al objeto global (this)
this.nombre = "Contexto Global";

// Imprime el valor de la propiedad "nombre" del objeto global (this)
console.log(this.nombre);

// Definición de una función llamada "imprimir"
function imprimir() {
  // Imprime el valor de la propiedad "nombre" del contexto en que se llama esta función
  console.log(this.nombre);
}

// Llama a la función "imprimir" sin contexto específico
imprimir();

// Definición de un objeto llamado "obj" con una propiedad "nombre" y un método "imprimir"
const obj = {
  nombre: "Contexto objeto",
  imprimir: function () {
    // Imprime el valor de la propiedad "nombre" del objeto actual (obj)
    console.log(this.nombre);
  },
};

// Llama al método "imprimir" del objeto "obj"
obj.imprimir();

// Definición de un objeto llamado "obj2" con una propiedad "nombre" y un método "imprimir"
const obj2 = {
  nombre: "Contexto objeto 2",
  imprimir, // Aquí "imprimir" es una referencia a la función definida anteriormente
};

// Llama al método "imprimir" del objeto "obj2"
obj2.imprimir();

// Definición de una función constructora llamada "Persona"
function Persona(nombre) {
  // Establece una propiedad "nombre" en el objeto creado por esta función constructora
  this.nombre = nombre;

  // Retorna una función de flecha que imprime el nombre y el número 23
  return () => console.log(this.nombre, 23);
}

// Crea una nueva instancia de Persona llamada "adrian"
let adrian = new Persona("Adrian");

// Llama a la función retornada por el constructor "Persona" en el contexto de "adrian"
adrian();
