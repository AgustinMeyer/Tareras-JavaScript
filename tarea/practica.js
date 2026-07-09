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
let temperaturaMaxima = temperaturas[0];
let temperaturaMinima = temperaturas[0];
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i]> temperaturaMaxima) {
        temperaturaMaxima = temperaturas[i];
    }if (temperaturas[i]< temperaturaMinima) {
      temperaturaMinima = temperaturas[i];
    } 
    
}
console.log(temperaturaMaxima);
console.log(temperaturaMinima);

// Tarea 5

const datos = [1, 2, 3, 4, 5, 6, 7, 8];
const datosAlCuadrado= [];

for (let i = 0; i < datos.length; i++) {
    let numeroActual= datos[i]
    
    if (numeroActual % 2=== 0 ) {
        let cuadrado = numeroActual * numeroActual;
        datosAlCuadrado.push(cuadrado)
    } else{
        datosAlCuadrado.push(numeroActual);
    }
    
}
console.log(datosAlCuadrado)