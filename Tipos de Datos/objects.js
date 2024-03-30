//OBJETOS

const adrian = {
    nombre: "Adrián",
    apellido: "Alcocer",
    edad: 22,
    pasatiempos: ["Jugar", "Programar"],
    soltero: false,
    contacto: {
        email: "jadrianaldo@outlook.com",
        twiter: "@jalcocer",
        movil: 8186580644,
    },
    saludar: function () {
        console.log("Hola :)");
    },
    decirMiNombre: function(){
        //This hace referencia al objeto en el que se encuentra
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

console.log(adrian);
console.log(adrian["nombre"]);
console.log(adrian["apellido"]);
console.log(adrian.nombre);
console.log(adrian.apellido);
console.log(adrian.edad);
console.log(adrian.pasatiempos[0]);
console.log(adrian.soltero);
console.log(adrian.contacto.email);
adrian.saludar();
adrian.decirMiNombre();

console.log(Object.keys(adrian)); //Muestra las llaves del objeto
console.log(Object.values(adrian)); //muestra los valores del objeto
console.log(adrian.hasOwnProperty("nombre")); //Muestra si hay propiedad con el nombre del ()
console.log(adrian.hasOwnProperty("nacimiento")); //Muestra si hay propiedad con el nombre del ()