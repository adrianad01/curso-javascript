//WeakSets

/* 
Los objetos WeakSet son colecciones de objetos. 
Al igual que Set, cada objecto WeakSet puede estar solo una vez; todos los objetos en una colección WeakSet son unicos. 
*/

let weakSet = new WeakSet();

let objeto1 = {};
let objeto2 = {};

weakSet.add(objeto1);
weakSet.add(objeto2);

console.log(weakSet.has(objeto1)); // Devuelve true

weakSet.delete(objeto1);

console.log(weakSet.has(objeto1)); // Devuelve false


//WeakMaps

let weakMap = new WeakMap();

let object1 = {};
let object2 = {};

weakMap.set(object1, "Datos privados de objeto1");

console.log(weakMap.get(object1)); // Muestra "Datos privados de objeto1"

// Los datos privados serán eliminados automáticamente cuando el objeto1 sea recolectado por el recolector de basura

console.log(weakMap.get(object2)); // Devuelve undefined, ya que no hay datos asociados con objeto2

/*  
El objeto WeakMap es una colección de pares llave/valor en la que las llaves deben ser objetos con valores de cualquier tipo de dato en JavaScript, 
y el cual no crea fuertes referencias a sus llaves. 
Es decir, la presencia de un objeto como llave en un WeakMap no evita que el objeto sea recolectado como basura. 
Una vez que se ha recopilado un objeto utilizado como llave, sus valores correspondientes en cualquier WeakMap se convierten en candidatos 
para la recolección de basura — siempre y cuando no se les mencione fuertemente en otros lugares.

*/
