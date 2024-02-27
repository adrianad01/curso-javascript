//Usar var es mala práctica
var hola = "Hola mundo";
let hello = "Hello World";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

// Var VS Let
console.log("******Var******");
var musica = "Rock";
console.log(musica);
{
    var musica = "Pop";
    console.log(musica);
}
console.log(musica);

console.log("******Let******");
let musica2 = "Rock";
console.log(musica2);
{
    let musica2 = "Pop";
    console.log(musica2);
}
console.log(musica2);