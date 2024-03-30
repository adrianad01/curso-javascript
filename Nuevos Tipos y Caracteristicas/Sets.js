/* 
Los objetos Set son colecciones de valores. 
Puede iterar a través de los elementos de un conjunto en orden de inserción. 
Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set.
*/

// Crear un nuevo conjunto (Set) con varios valores, incluidos números, booleanos, objetos y cadenas
const set = new Set([
    1,
    2,
    3,
    3, // Los Sets solo almacenan valores únicos, por lo que el segundo '3' se ignora
    4,
    5,
    true,
    false,
    false, // El segundo 'false' se ignora
    {},
    {}, // Aunque los objetos se ven iguales, cada uno es único, por lo que ambos se almacenan
    "hola",
    "Hola", // Las cadenas son sensibles a mayúsculas y minúsculas, por lo que "hola" y "Hola" son distintas
  ]);
  
  // Mostrar el conjunto y su tamaño
  console.log(set); // Muestra el conjunto completo con valores únicos
  console.log(set.size); // Muestra el número de elementos únicos en el conjunto
  
  // Crear un nuevo conjunto vacío y añadir valores únicos individualmente
  const set2 = new Set();
  set2.add(1);
  set2.add(2);
  set2.add(2); // El segundo '2' se ignora
  set2.add(3);
  set2.add(true);
  set2.add(false);
  set2.add(true); // El segundo 'true' se ignora
  set2.add({}); // Se añade un objeto
  console.log(set2); // Muestra el conjunto 2
  console.log(set2.size); // Muestra el tamaño del conjunto 2
  
  // Recorrer el conjunto 'set' usando un bucle 'for...of'
  console.log("Recorriendo Set");
  for (item of set) {
    console.log(item); // Muestra cada elemento único del conjunto
  }
  
  // Recorrer el conjunto 'set2' usando el método 'forEach'
  console.log("Recorriendo Set2");
  set2.forEach((item) => console.log(item)); // Muestra cada elemento único del conjunto 2
  
  // Intentar acceder a un elemento de un conjunto por índice (los conjuntos no son indexables)
  console.log(set[0]); // No se puede acceder por índice
  
  // Convertir el conjunto 'set' a un array y acceder a un elemento por índice
  let arr = Array.from(set); // Convierte el conjunto 'set' a un array
  console.log(arr[6]); // Muestra el elemento en la posición 6 del array (ya que los arrays son indexables)
  
  // Eliminar un elemento del conjunto 'set' por valor
  set.delete("Hola"); // Elimina la cadena "Hola"
  console.log(set); // Muestra el conjunto 'set' sin el elemento eliminado
  
  // Comprobar si un conjunto contiene ciertos valores
  console.log(set.has("hola")); // Devuelve true si el conjunto contiene "hola"
  console.log(set.has("Hola")); // Devuelve false ya que "Hola" fue eliminado anteriormente
  
  // Limpiar el conjunto 'set2', eliminando todos los elementos
  set2.clear();
  console.log(set2); // Muestra el conjunto 'set2' vacío
  
