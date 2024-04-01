// 1. Imprime en la consola todos los elementos de lista (<li>) del documento.
console.log(document.getElementsByTagName("li"));

// 2. Imprime en la consola todos los elementos con la clase "card" del documento.
console.log(document.getElementsByClassName("card"));

// 3. Imprime en la consola todos los elementos con el atributo name="nombre" del documento.
console.log(document.getElementsByName("nombre"));

// 4. Imprime en la consola el elemento con el ID "menu" del documento.
console.log(document.getElementById("menu"));

// 5. Imprime en la consola el primer elemento con el ID "menu" utilizando un selector de CSS.
console.log(document.querySelector("#menu"));

// 6. Imprime en la consola el primer enlace (<a>) del documento.
console.log(document.querySelector("a"));

// 7. Imprime en la consola todos los enlaces (<a>) del documento.
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

//Imprime todos elementos a en la consola del navegador
document.querySelectorAll("a").forEach((element) => console.log(element));

// 8. Imprime en la consola el primer elemento con la clase "card" utilizando un selector de CSS.
console.log(document.querySelector(".card"));

// 9. Imprime en la consola todos los elementos con la clase "card" del documento.
console.log(document.querySelectorAll(".card"));

// 10. Imprime en la consola el tercer elemento con la clase "card" del documento (suponiendo que hay al menos tres).
console.log(document.querySelectorAll(".card")[2]);

// 11. Imprime en la consola todos los elementos de lista (<li>) hijos directos del elemento con ID "menu".
console.log(document.querySelectorAll("#menu li"));
