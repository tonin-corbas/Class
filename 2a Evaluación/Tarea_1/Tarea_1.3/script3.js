// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

let numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let total = 0
let total2 = 0
let media = 0

for(let i = 0; i < numeros.length; i++){
    total+=numeros[i];   
    total2-=numeros[i];
    media = numeros[i]/numeros.length;
}
console.log("La suma total de todos los números es: " + total);
console.log("La resta total de todos los números es: " + total2);
console.log("La media de los números es: " + media);
console.log("El número más grande es: " + Math.max(...numeros))
console.log("El número más pequeño es: " + Math.min(...numeros))