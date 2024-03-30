const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i<numeros.length;i++){
    if(i===5){
        break; //Cuando el break se cumple, se sale de la estructura de control en la que está
    }
    console.log(numeros[i])
}

for(let i = 0; i<numeros.length;i++){
    if(i===5){
        continue; //Continue solo omite el codigo que se encuentra en esa iteración del ciclo
    }
    console.log(numeros[i])
}