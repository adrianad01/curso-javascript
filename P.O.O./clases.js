class Mascota {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar() {
    console.log("guaf guaf");
  }
  saludar() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
}
class Perro extends Mascota {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar2() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guaf");
  }

  static quienSoy() {
    console.log("Soy una chihuahueña de 10 años");
  }

  get getRraza (){
    return this.raza
  }

  set setRaza (raza){
    this.raza = raza
  }

}
Perro.quienSoy();

const candy = new Mascota("Candy", "Hembra"),
  cosa = new Perro("Cosa", "Hembra", "Pequeña");

console.log(candy);
candy.sonar();
candy.saludar();
console.log(cosa);
cosa.sonar();
cosa.saludar();
cosa.ladrar();
console.log(cosa.getRraza);
candy.setRaza = "Chihuahueño";
console.log(cosa.getRraza);