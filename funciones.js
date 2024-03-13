//Funcion declarada
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  console.log("Cuatro");
}
estoEsUnaFuncion(); // Invocación de funciones

//Función que devuelve valor
function estoEsUnaFuncionQueDevuelveValor() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  console.log("Cuatro");
  return "La función ha regresado una cadena de texto";
}
let valor = estoEsUnaFuncionQueDevuelveValor();
console.log(valor);

//Función que acepta parámetros
function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Adrián", 22);


// ----------------------------------------------------//


//Funciones declaradas vs funciones expresada
funcionDeclarada();
function funcionDeclarada() {
  console.log(
    "Esto es una función declarada, puede invocarse en cualquier parte del código, incluso antes de que la función sea declarada"
  );
}
funcionDeclarada();

//Función anónima
const funcionExpresada = function () {
  console.log(
    "Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos está función antes de su definición, JS nos dirá......"
  );
};
funcionExpresada();
