// Mostrar números del 1 al 10 . 

for (let i = 1; i <=10 ; i++) {
    console.log(i);
    
    
}

//  Tabla de multiplicar de un número. 

let numero = prompt("Ingrese el numero de la tabla que quiera aprender:");

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero*i}`);
        
    }

//  Suma de los primeros 10 números 

let suma = 0
for (let i = 1; i <= 10; i++) {
    suma = suma + i;
    
}
console.log("La suma total es:" + suma);


// While  Contador del 1 al 10

let numero = 1
while (numero<= 10) {
    console.log(numero);
    numero ++;
}

// Cuenta regresiva

let cuentaRegrasiva = 10;
while (cuentaRegrasiva>0) {
    console.log(cuentaRegrasiva);
    cuentaRegrasiva--;
}
console.log("💣 BOOMM!!");

// Mostrar números pares hasta 20

let numerosPares= 2;

while (numerosPares <= 20 ) {
    console.log(numerosPares);
    numerosPares= numerosPares + 2;
}