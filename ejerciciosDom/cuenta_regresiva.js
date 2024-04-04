// Selecciona el documento HTML actual
const d = document;

// Exporta la función countdown como función por defecto del módulo actual
export default function countdown(id, limitDate, finalMessage) {
  // Selecciona el elemento del DOM con el ID especificado
  const $countdown = d.getElementById(id),
    // Obtiene la fecha límite en milisegundos
    countdownDate = new Date(limitDate).getTime();

  // Crea un intervalo que se ejecutará cada segundo
  let countdownTempo = setInterval(() => {
    // Obtiene la fecha y hora actual en milisegundos
    let now = new Date().getTime(),
      // Calcula el tiempo restante hasta la fecha límite en milisegundos
      limitTime = countdownDate - now,
      // Calcula el número de días restantes
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      // Calcula el número de horas restantes
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      // Calcula el número de minutos restantes
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      // Calcula el número de segundos restantes
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    // Actualiza el contenido HTML del elemento $countdown con el tiempo restante
    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    // Si ya se alcanzó o pasó la fecha límite
    if (limitTime < 0) {
      // Detiene el intervalo de cuenta regresiva
      clearInterval(countdownTempo);
      // Actualiza el contenido HTML del elemento $countdown con el mensaje final
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
}
