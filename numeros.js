let num1 = 2;
let num2 = new Number(2);
let num3 = 7.19;
let num4 = "3.3";
console.log(num1, num2);
console.log(num3.toFixed(1)); //Redondea con la cantida de decimales proporcionadas en el parentesis
console.log(num3.toFixed(5)); //Redondea con la cantida de decimales proporcionadas en el parentesis
console.log(parseInt(num3)); // Convierte el número a entero
console.log(parseFloat(num3)); //Convierte el número a flotat
console.log(typeof num1, typeof num3, typeof num4); //Muestra que tipo de dato es la variable
console.log(num1 + num2); // suma de 2 números
console.log(num3 + parseInt(num4)); 
console.log(num3 + parseFloat(num4));
console.log(num3 + Number.parseInt(num4)); 
console.log(num3 + Number.parseFloat(num4));






