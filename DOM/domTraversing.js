// Selecciona el primer elemento del DOM con la clase "cards" y lo asigna a la variable $cards
const $cards = document.querySelector(".cards");

// Muestra por consola el elemento $cards
console.log($cards);

// Muestra por consola una colección de los elementos secundarios de $cards
console.log($cards.children);

// Muestra por consola el tercer elemento secundario de $cards
console.log($cards.children[2]);

// Muestra por consola el elemento padre de $cards
console.log($cards.parentElement);

// Muestra por consola el primer elemento secundario de $cards
console.log($cards.firstElementChild);

// Muestra por consola el último elemento secundario de $cards
console.log($cards.lastElementChild);

// Muestra por consola el elemento hermano anterior de $cards
console.log($cards.previousElementSibling);

// Muestra por consola el elemento hermano siguiente de $cards
console.log($cards.nextElementSibling);

// Muestra por consola el ancestro más cercano de $cards que sea un elemento <div>
console.log($cards.closest("div"));

// Muestra por consola el ancestro más cercano de $cards que sea el elemento <body>
console.log($cards.closest("body"));

// Muestra por consola el ancestro más cercano del cuarto elemento secundario de $cards que sea un elemento <section>
console.log($cards.children[3].closest("section"));

