// tarea 3
const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
const palabrasConvertida= [];
for (let i = 0; i < palabras.length; i++) {
    let palabraActual = palabras[i];
    let primeraLetra = palabraActual.charAt(0).toUpperCase();
    let restoDeLaPalabra = palabraActual.slice(1).toLowerCase();
    let palabraCorregida= primeraLetra + restoDeLaPalabra;
    
    palabrasConvertida.push(palabraCorregida);
    
}

console.log(palabrasConvertida);

// tarea 4
const temperaturas = [18, 22, 15, 28, 12, 25, 19];
let temperaturaMaxima = 0;
let temperaturaMinima = 1000000;
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i]> temperaturaMaxima) {
        temperaturaMaxima = temperaturas[i];
    }if (temperaturas[i]< temperaturaMinima) {
      temperaturaMinima = temperaturas[i];
    } 
    
}
console.log(temperaturaMaxima);
console.log(temperaturaMinima);