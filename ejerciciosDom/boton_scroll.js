// Selecciona el documento HTML y la ventana actual
const d = document,
  w = window;

// Exporta la función scrollTopButton como función por defecto del módulo actual
export default function scrollTopButton(btn) {
  // Selecciona el elemento del DOM que corresponde al botón de desplazamiento
  const $scrollBtn = d.querySelector(btn);

  // Agrega un event listener para el evento scroll en la ventana
  w.addEventListener("scroll", (e) => {
    // Obtiene la cantidad de desplazamiento vertical de la ventana
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    // Si el desplazamiento es mayor que 600px, muestra el botón; de lo contrario, lo oculta
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    // Muestra en la consola la posición de desplazamiento horizontal y vertical de la ventana
    console.log(window.pageXOffset, d.documentElement.scrollTop);
  });

  // Agrega un event listener para el evento click en el documento
  d.addEventListener("click", (e) => {
    // Si el elemento que desencadenó el evento click coincide con el botón de desplazamiento
    if (e.target.matches(btn)) {
      // Realiza un desplazamiento suave hacia arriba de la ventana
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
