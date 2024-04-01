// Selecciona el elemento del DOM con la clase "link-dom" y lo asigna a la variable $linkDOM
const $linkDOM = document.querySelector(".link-dom");

// Muestra por consola el objeto de estilo del elemento
console.log($linkDOM.style);

// Muestra por consola el valor del color de fondo del elemento
console.log($linkDOM.style.backgroundColor);

// Muestra por consola el valor del color del texto del elemento
console.log($linkDOM.style.color);

// Muestra por consola el valor del atributo 'style' del elemento
console.log($linkDOM.getAttribute("style"));

// Muestra por consola el objeto de estilos computados del elemento
console.log(window.getComputedStyle($linkDOM));

// Muestra por consola el valor de la propiedad 'color' del estilo computado del elemento
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// Establece la propiedad 'text-decoration' del estilo del elemento a 'none'
$linkDOM.style.setProperty("text-decoration", "none");

// Establece la propiedad 'display' del estilo del elemento a 'block'
$linkDOM.style.setProperty("display", "block");

// Establece la propiedad 'width' del estilo del elemento al 50% del ancho del contenedor
$linkDOM.style.width = "50%";

// Establece la propiedad 'text-align' del estilo del elemento al centro
$linkDOM.style.textAlign = "center";

// Establece el margen izquierdo del elemento para centrarlo horizontalmente
$linkDOM.style.marginLeft = "auto";

// Establece el margen derecho del elemento para centrarlo horizontalmente
$linkDOM.style.marginRight = "auto";

// Establece el relleno del elemento en todas las direcciones
$linkDOM.style.padding = "1rem";

// Establece el radio de borde del elemento
$linkDOM.style.borderRadius = ".5rem";

// Muestra por consola el objeto de estilo actualizado del elemento
console.log($linkDOM.style);

// Muestra por consola el valor del atributo 'style' actualizado del elemento
console.log($linkDOM.getAttribute("style"));

// Muestra por consola el objeto de estilos computados actualizado del elemento
console.log(window.getComputedStyle($linkDOM));

//Custom Properties (Variables CSS)

// Selecciona el elemento raíz del DOM (html) y lo asigna a la variable $html,
// y selecciona el elemento body del DOM y lo asigna a la variable $body
const $html = document.documentElement,
      $body = document.body;

// Obtiene el valor de la variable CSS '--dark-color' definida en el html
// y lo asigna a la variable varDarkColor, luego obtiene el valor de la variable CSS '--yellow-color'
// y lo asigna a la variable varYellowColor
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// Muestra por consola los valores de las variables varDarkColor y varYellowColor
console.log(varDarkColor, varYellowColor);

// Establece el color de fondo del body al valor de varDarkColor
$body.style.backgroundColor = varDarkColor;
// Establece el color del texto del body al valor de varYellowColor
$body.style.color = varYellowColor;

// Establece el valor de la variable CSS '--dark-color' en el html a '#000000' (negro)
$html.style.setProperty("--dark-color", "#000000");

// Actualiza el valor de varDarkColor con el nuevo valor de '--dark-color'
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// Establece el color de fondo del body al nuevo valor de varDarkColor
$body.style.setProperty("background-color", varDarkColor);

