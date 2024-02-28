//STRINGS

let nombre = "Adrián";
let apellido = "Alcocer";
let saludo = new String("Hola Mundo");
let lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam esse ipsam enim, iusto tempore aperiam";
console.log(nombre, apellido, saludo);
console.log(
  nombre.length, //Longitud del valor de la variable
  apellido.length, //Longitud del valor de la variable
  saludo.length, //Longitud del valor de la variable
  nombre.toUpperCase(), //La variable en mayúscula
  apellido.toLowerCase(), //La variable en minúscula
  lorem.includes("ipsum"), //Valida si incluye la palabra mostrada y regresa un valor booleano
  lorem.includes("adrián"), //Valida si incluye la palabra mostrada y regresa un valor booleano
  lorem.trim(), //Si ve espacios al inicio o final, el trim los elimina
  lorem.split(" "), //divide un texto, en este caso por espacios
  lorem.split(",") //divide un texto, en este caso por comas
);

//CONCATENACIÓN

//Método 1
let name = "Adrián"
let lastName = "Alcocer"
let hello = "Hola, mi nombre es: " + name + " " + lastName;
console.log(hello);

//Método 2 (RECOMENDADA)
let helloTwo = `Hola, mi nombre es ${name} y mi apellido es ${lastName}`;
console.log(helloTwo);

//Método 3
let longString2 =
  "Esta es una cadena muy larga que necesita \
que dividimos en varias líneas porque \
de lo contrario, mi código es ilegible.";
console.log(longString2);

let ul = "<ul> <li>Primavera</li> <li>Verano</li> <li>Otoño</li> <li>Invierno</li> </ul>"
console.log(ul);

let ul2 = `<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>
`
console.log(ul2);

