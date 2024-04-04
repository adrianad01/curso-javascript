// Crear un nuevo objeto Date que representa la fecha y hora actuales
let fecha = new Date();
console.log(fecha); // Resultado: (la fecha y hora actual)

// Obtener el día del mes (número del 1 al 31)
console.log(fecha.getDate()); // Resultado: (día del mes actual)

// Obtener el día de la semana (número del 0 al 6, donde 0 es domingo)
console.log(fecha.getDay()); // Resultado: (día de la semana actual)

// Obtener el mes (número del 0 al 11, donde 0 es enero)
console.log(fecha.getMonth()); // Resultado: (mes actual)

// Obtener el año desde 1900 (número del 0 al 99)
console.log(fecha.getYear()); // Resultado: (año actual - 1900)

// Obtener el año completo (número de 4 dígitos)
console.log(fecha.getFullYear()); // Resultado: (año actual)

// Obtener la hora (número del 0 al 23)
console.log(fecha.getHours()); // Resultado: (hora actual)

// Obtener los minutos (número del 0 al 59)
console.log(fecha.getMinutes()); // Resultado: (minutos actuales)

// Obtener los segundos (número del 0 al 59)
console.log(fecha.getSeconds()); // Resultado: (segundos actuales)

// Obtener los milisegundos (número del 0 al 999)
console.log(fecha.getMilliseconds()); // Resultado: (milisegundos actuales)

// Convertir la fecha a una representación de cadena
console.log(fecha.toString()); // Resultado: (cadena representando la fecha y hora)

// Convertir la fecha a una cadena en formato de fecha
console.log(fecha.toDateString()); // Resultado: (cadena representando la fecha)

// Convertir la fecha a una cadena local en formato de fecha y hora
console.log(fecha.toLocaleString()); // Resultado: (cadena representando fecha y hora local)

// Convertir la fecha a una cadena local en formato de fecha
console.log(fecha.toLocaleDateString()); // Resultado: (cadena representando fecha local)

// Convertir la fecha a una cadena local en formato de hora
console.log(fecha.toLocaleTimeString()); // Resultado: (cadena representando hora local)

// Obtener la diferencia de minutos entre la hora local y UTC
console.log(fecha.getTimezoneOffset()); // Resultado: (diferencia de minutos)

// Obtener el día del mes en formato UTC (número del 1 al 31)
console.log(fecha.getUTCDate()); // Resultado: (día del mes en formato UTC)

// Obtener la hora en formato UTC (número del 0 al 23)
console.log(fecha.getUTCHours()); // Resultado: (hora en formato UTC)

// Obtener el número de milisegundos desde el 1 de enero de 1970
console.log(Date.now()); // Resultado: (número de milisegundos desde 1970 hasta ahora)


// Convertir la fecha a una cadena local en formato de fecha
console.log(fecha.toLocaleDateString());

// Convertir la fecha a una cadena local en formato de hora
console.log(fecha.toLocaleTimeString());

// Obtener la diferencia de minutos entre la hora local y UTC
console.log(fecha.getTimezoneOffset());

// Obtener el día del mes en formato UTC (número del 1 al 31)
console.log(fecha.getUTCDate());

// Obtener la hora en formato UTC (número del 0 al 23)
console.log(fecha.getUTCHours());

// Obtener el número de milisegundos desde el 1 de enero de 1970
console.log(Date.now());
