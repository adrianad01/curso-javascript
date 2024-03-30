//PARAMETROS REST (...n)
function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });
    return resultado;
}
console.log(sumar(1,2,3,4,5,6,7,8,8));

//Operador Spread
const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,0];
console.log(array1, array2);

const array3 = [...array1, ...array2];
console.log(array3)