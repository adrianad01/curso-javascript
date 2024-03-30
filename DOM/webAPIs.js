//WEB APIs

let texto = "ARRIBA EL CRUZ AZUL";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
