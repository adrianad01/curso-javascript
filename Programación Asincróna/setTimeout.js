// setTimeout(code)
// setTimeout(code, delay)

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)

// setTimeout(() => {
//   console.log("Retraso de 1 segundo");
// }, 1000);

// setInterval(() => {
//   console.log(
//     "Set Interval, se ejecuta indefinidamente cada cierto intervalo de tiempo"
//   );
// }, 1000);

// let temporizador = setTimeout(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// clearTimeout(temporizador);
// console.log("Después del clear");

let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
  }, 1000);
  
  clearInterval(temporizador);
  console.log("Después del clearInterval");
