try {
    console.log("En el try se agrega el código a evaluar");
    contador;
    console.log("Segundo mensaje")
} catch (error) {
    console.log("En el catch se agrega el error surgido en el try");
    console.log(error);
} finally {
    console.log("Se ejecutará siempre al final de un bloque try-catch");
}


try {
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caractér introducido no es un número.") //Mensaje de error personalizado
    }
    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`) //Si no lo cumple se brinca al catch
}