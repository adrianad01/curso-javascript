// Imprime el objeto global (en el navegador, esto sería "window")
console.log(this);

// Agrega una propiedad "lugar" al objeto global (this)
this.lugar = "Contexto Global";

// Define una función llamada "saludar" que toma dos parámetros: saludo y aQuien
function saludar(saludo, aQuien) {
  // Imprime un saludo con el nombre y el lugar definidos en el contexto actual (this)
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

// Llama a la función "saludar" con los argumentos "Hola" y "Candy"
saludar("Hola", "Candy");

// Define un objeto llamado "obj" con una propiedad "lugar"
const obj = {
  lugar: "Contexto Objeto",
};

// Llama a la función "saludar" con el objeto "obj" como contexto, y los argumentos "Hola" y "Adrián"
saludar.call(obj, "Hola", "Adrián");

// Llama a la función "saludar" con el objeto "obj" como contexto y los argumentos "Hola" y "Jesús"
saludar.apply(obj, ["Hola", "Jesús"]);

// Define un objeto llamado "persona" con una propiedad "nombre" y un método "saludar"
const persona = {
  nombre: "Adrian",
  saludar: function () {
    // Imprime un saludo utilizando el nombre del objeto actual (this)
    console.log(`Hola ${this.nombre}`);
  },
};

// Llama al método "saludar" del objeto "persona"
persona.saludar();

// Define un nuevo objeto llamado "otraPersona" con un método "saludar"
const otraPersona = {
  saludar: persona.saludar.bind(persona),
};

// Llama al método "saludar" del objeto "otraPersona", utilizando el método "saludar" del objeto "persona" como contexto
otraPersona.saludar();
