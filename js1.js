console.log("Hello my friend he has chesse");
console.warn("Esto es un aviso");
console.error("Ah ocurrido un error");
console.count("3");

console.log(typeof 4);
console.log("Tipo de 34: " + typeof 34+".");
console.log(`Tipo de 34: ${typeof 34}.`);
console.log();
console.log('hola');
console.log(`4 es igual a 3 ${4 == 3}`);
console.log(`4 es mayor que 3 ${4 > 3}`);
console.log(`4 es mayor igual a 3 ${4 >= 3}`);
console.log(`4 es menor a 3 ${4 < 3}`);
console.log(`4 es menor igual a 3${4 <= 3}`);
console.log(`4 es distinto de 3 ${4 != 3}`);
console.log(`4 es igual a 3 o 4 es mayor a 2 ${4 == 3 || 4 > 2}`);
console.log(`4 es igual a 3 y 4 es mayor a 2 ${4 == 3 && 4 > 2}`);
console.log(`4 es igual a 3 pero su resultado es el opuesto, y 4 es mayor a 2 ${!(4 == 3) && 4 > 2}`);
console.log()

console.log(10 < 2 ? "Es verdad":"Es falso")

let i;
let nombre;
let edad =19, ciudad="Monterrey";

const FACTOR = 1.45;
const VEL = 1500;

console.log(FACTOR, VEL)

console.log(edad, ciudad);

let mensaje;
let temp =4;
mensaje = temp > 10? "Temperatura ambiente":"Temperatura fria";
console.log(mensaje);