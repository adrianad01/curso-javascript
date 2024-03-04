//P.O.O.

/*
Clases: Modelo a Seguir
Objetos: Instancia de una clase
    Atributos: Caracteristica o propiedad del objeto (Variables dentro de un objeto)
    Métodos (funciones): Acciones que un objeto puede realizar
*/

const animal = {
  nombre: "Candy",
  sonar() {
    console.log("guaf");
  },
};
const animal2 = {
  nombre: "Bella",
  sonar() {
    console.log("guaf guaf");
  },
};
console.log(animal);
console.log(animal2);

//Función constructora donde se asignan metodos al prototipo, no a la funcion como tal
function Mascota(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}
// Método
Mascota.prototype.sonar = function () {
  console.log("guaf guag guaf");
};
Mascota.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} y soy ${this.genero}`);
};

//Herencia Prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Mascota;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro está heredando a animal
Perro.prototype = new Mascota();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log(`Soy un perro y mi sonido es un ladrido`);
};

Perro.prototype.ladrar = function () {
  console.log("Guaf Guag Guag Guaf");
};

const candy = new Perro("Candy", "Hembra", "Raza Pequeña"),
  bella = new Mascota("Bella", "Hembra");
  
console.log(candy);
console.log(bella);

candy.sonar();
candy.saludar();

bella.sonar();
bella.saludar();
