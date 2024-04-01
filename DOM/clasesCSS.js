// Selecciona el primer elemento del DOM con la clase "card" y lo asigna a la variable $card
const $card = document.querySelector(".card");

// Muestra por consola el elemento $card
console.log($card);

// Muestra por consola la propiedad className del elemento $card, que devuelve una cadena de texto con todas las clases del elemento
console.log($card.className);

// Muestra por consola el objeto de tipo DOMTokenList que representa las clases del elemento $card
console.log($card.classList);

// Verifica si la clase "rotate-45" está presente en el elemento $card y muestra el resultado por consola
console.log($card.classList.contains("rotate-45"));

// Agrega la clase "rotate-45" al elemento $card
$card.classList.add("rotate-45");

// Verifica nuevamente si la clase "rotate-45" está presente en el elemento $card y muestra el resultado por consola
console.log($card.classList.contains("rotate-45"));

// Muestra por consola la propiedad className actualizada del elemento $card
console.log($card.className);

// Muestra por consola el objeto de tipo DOMTokenList actualizado que representa las clases del elemento $card
console.log($card.classList);

// Elimina la clase "rotate-45" del elemento $card
$card.classList.remove("rotate-45");

// Verifica nuevamente si la clase "rotate-45" está presente en el elemento $card y muestra el resultado por consola
console.log($card.classList.contains("rotate-45"));

// Muestra por consola la propiedad className actualizada del elemento $card
console.log($card.className);

// Muestra por consola el objeto de tipo DOMTokenList actualizado que representa las clases del elemento $card
console.log($card.classList);

// Si la clase "rotate-45" está presente en el elemento $card, la elimina; si no está presente, la agrega
$card.classList.toggle("rotate-45");

// Verifica si la clase "rotate-45" está presente en el elemento $card y muestra el resultado por consola
console.log($card.classList.contains("rotate-45"));

// Si la clase "rotate-45" está presente en el elemento $card, la elimina; si no está presente, la agrega
$card.classList.toggle("rotate-45");

// Verifica si la clase "rotate-45" está presente en el elemento $card y muestra el resultado por consola
console.log($card.classList.contains("rotate-45"));

// Agrega la clase "rotate-45" al elemento $card
$card.classList.toggle("rotate-45");

// Reemplaza la clase "rotate-45" por la clase "rotate-135" en el elemento $card
$card.classList.replace("rotate-45", "rotate-135");

// Agrega las clases "opaciti-80" y "sepia" al elemento $card
$card.classList.add("opaciti-80", "sepia");

