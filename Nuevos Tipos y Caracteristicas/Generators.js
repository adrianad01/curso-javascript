/* 
Estas funciones pueden generar una secuencia de valores a lo largo del tiempo, en lugar de calcular un solo valor y devolverlo de inmediato. 
 */

// Definición de la función generadora 'iterable'
function* iterable() {
    yield "hola"; // Genera el valor "hola"
    console.log("Instrucciones de código"); // Imprime un mensaje en la consola
    yield "hola 2"; // Genera el valor "hola 2"
    console.log("Más instrucciones"); // Imprime otro mensaje en la consola
    yield "hola 3"; // Genera el valor "hola 3"
    yield "hola 4"; // Genera el valor "hola 4"
  }
  
  let iterador = iterable(); // Crea un iterador a partir de la función generadora 'iterable'
  
  // Recorriendo el iterador usando un bucle 'for...of'
  for (let y of iterador) {
    console.log(y); // Imprime cada valor generado por el iterador
  }
  
  // Creación de un array con los valores generados por la función generadora 'iterable'
  const arr = [...iterable()];
  console.log(arr);
  
  // Definición de la función 'cuadrado' para calcular el cuadrado de un valor
  function cuadrado(valor) {
    setTimeout(() => {
      return console.log({ valor, resultado: valor * valor }); // Calcula el cuadrado del valor y lo imprime en la consola
    }, Math.random() * 1000);
  }
  
  // Definición de la función generadora 'generador'
  function* generador() {
    console.log("Inicia Generator"); // Imprime un mensaje en la consola
    yield cuadrado(0); // Genera el cuadrado de 0
    yield cuadrado(1); // Genera el cuadrado de 1
    yield cuadrado(2); // Genera el cuadrado de 2
    yield cuadrado(3); // Genera el cuadrado de 3
    yield cuadrado(4); // Genera el cuadrado de 4
    yield cuadrado(5); // Genera el cuadrado de 5
    console.log("Termina Generator"); // Imprime un mensaje en la consola
  }
  
  let gen = generador(); // Crea un generador
  for (let y of gen) {
    console.log(y);
  }