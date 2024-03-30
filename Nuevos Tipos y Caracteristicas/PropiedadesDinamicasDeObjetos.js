// Creación de un objeto 'objUsuarios' con una única propiedad cuya clave es generada aleatoriamente
const objUsuarios = {
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor Aleatorio",
};
console.log(objUsuarios); // Imprime el objeto 'objUsuarios'

// Definición del array 'usuarios' con nombres de usuarios
const usuarios = [
  "Danna",
  "Adrián",
  "Candy",
  "Susy",
  "Gaby",
  "Adrián Guadalupe",
];

// Iteración sobre el array 'usuarios' utilizando forEach para asignar cada nombre como valor de una propiedad en 'objUsuarios'
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios); // Imprime el objeto 'objUsuarios' después de la asignación de nombres de usuarios
