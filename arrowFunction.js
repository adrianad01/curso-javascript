//Función declarada
function saludar () {
    console.log("Hello");
}
saludar();

//Arrow Function
const saludo = () => {
    console.log("Hello");
}
saludo();

//Cuando no recibe parametros la función se quedan los ()
const saludo2 = () => console.log("Hello");
saludo2();
//Cuando recibe un parametros la función, se pueden quitar los ()
const saludo3 = nombre => console.log(`Hola ${nombre}`);
saludo3("Adrián");