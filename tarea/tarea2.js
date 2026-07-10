// Se necesita un script que solicite al usuario escribir una frase o texto y luego ingresar una palabra que quiera buscar.

let frase= prompt("Ingrese una frase:");
let palabra= prompt("Ingrese la palabra que quiera buscar:");

let fraseMinuscula= frase.toLowerCase();
let palabraMinuscula= palabra.toLowerCase();

if(fraseMinuscula.includes(palabraMinuscula)){
    console.log(`Si la palrabra ${palabra} se encuentra en la frase"`)
} else{
    console.log("La palabra no se encuentra en la frase");
}

// Crea un script que simule el juego de Adivina el número
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

if (intento === numeroSecreto) {
    console.log(`¡Ganaste! Adivinaste el número secreto (${numeroSecreto}).`);
} else {
    console.log(`Perdiste. El número secreto era ${numeroSecreto}. Tu número fue ${intento}.`);
} 

// En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua. Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.

alert("Bienvenido, te voy a sugerir la bebida para acomañar tu plato");

let opcion= prompt("Elija el menu que quiera comer: \n 1.🥩Carne\n 2.🐟 Pescado\n 3.🍃Verdura");
switch(opcion) {
    case 1:
        console.log("Le ofrecemos vino tinto como acompañamiento");
        break;
    
    case 2:
        console.log("Le ofrecemos vino blanco de acompañamiento");
        break;
        
    case 3:
        console.log("Le ofrecemos agua para aompañar");
        break;
    default:
        console.log("Elija una comida del menu");        
} 