// Ejercicio 1: Calificación numérica a letra
// Escribe una función que tome una calificación numérica (por ejemplo, 0-100) y devuelva la letra equivalente (A, B, C, D o F) según la siguiente escala:
const calificacion = function (resultado) {
  if (resultado >= 0 && resultado <= 59) {
    console.log("F");
  } else if (resultado >= 60 && resultado <= 69) {
    console.log("D");
  } else if (resultado >= 70 && resultado <= 79) {
    console.log("C");
  } else if (resultado >= 80 && resultado <= 89) {
    console.log("B");
  } else if (resultado >= 90 && resultado <= 100) {
    console.log("A");
  } else {
    console.log("Ingrese un valor entre 0 y 100");
  }
};
calificacion(20);

// Ejercicio 2: Día de la semana
// Escribe una función que tome un número (1-7) y devuelva el día de la semana correspondiente (Lunes, Martes, ..., Domingo) utilizando un switch.
const diaSemana = function (dia) {
  switch (dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miercoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sabado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Ingrese un día valido.");
      break;
  }
};
diaSemana(5);

//Ejercicio 3: Mayor de tres números
//Escribe una función que tome tres números como parámetros y devuelva el mayor de los tres utilizando if anidados.

const numeroMayor = function (numero) {
  let num1 = window.prompt("Ingresa el primer número: ");
  let num2 = window.prompt("Ingresa el segundo número: ");
  let num3 = window.prompt("Ingresa el tercer número: ");

  if (num1 > num2 && num1 > num3) {
    console.log(`El número mayor es ${num1}`);
  } else if (num1 < num2 && num2 > num3) {
    console.log(`El número mayor es ${num2}`);
  } else{
    console.log(`El número mayor es ${num3}`);
  }
};

numeroMayor();
