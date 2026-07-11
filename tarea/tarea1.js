/*
Comparar números enteros.
Solicita al usuario dos números enteros.  
Convierte las entradas a números enteros.  
Determina cuál de los dos números es mayor, o si son iguales.  
Muestra el resultado en la consola.
*/

let primerNumero = parseInt(prompt("Ingrese un numero"));
let segundoNumero = parseInt(prompt("Ingrese otro numero"));


if (primerNumero > segundoNumero) {
    console.log(`${primerNumero} es mayor que ${segundoNumero}`);
}else{
    console.log(`${segundoNumero} es mayor que ${primerNumero}`);
}

/*
 Calcular promedio de notas
Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa una condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6).
*/

let primerNota = parseFloat(prompt("Ingrese su primer nota"));
let segundaNota = parseFloat(prompt("Ingrese su segunda nota"));
let terceraNota = parseFloat(prompt("Ingrese su tercera nota"));
let notaPromedio = (primerNota + segundaNota + terceraNota) / 3;

if (notaPromedio >= 6) {
    console.log(`Aprobado su promedio es ${notaPromedio.toFixed(2)}`);
}else{
    console.log(`Reprobado su promedio es ${notaPromedio.toFixed(2)}`);
}
