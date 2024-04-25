console.log("Inicio");
setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta 1 sola vez");
}, 1000);
setInterval(() => {
  console.log(
    "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo"
  );
}, 1000);
setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

console.log("Close")