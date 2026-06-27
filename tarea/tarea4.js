// tarea 1
let totalAhorrado= 0;
let meta = 1000;
while (totalAhorrado<meta) {
    let ahorroDelDia = prompt(`Llevas ahorrado ${totalAhorrado}, ¿Cuanto vas ahorrar hoy?`);
    let monto= parseFloat(ahorroDelDia);

    if (isNaN(monto)|| monto<0) {
        alert("❌ Por favor ingrese un valor mayor a 0 o 0");
    }

    totalAhorrado= totalAhorrado + monto;
}

alert("¡Objetivo alcanzado!");

// tarea 2
for (let fila = 1; fila <= 5; fila++) {
    lineaDeAsteriscos = ""

    for (let asteriscos = 1; asteriscos <=fila; asteriscos++) {
        lineaDeAsteriscos+="*";
        
    }
    
    console.log(lineaDeAsteriscos);
    
}

// Tarea 3

const CODIGO= "1234";
const MAX_INTENTOS = 3;
let intentosFallidos = 0;
let autenticado = false;

while (!autenticado && intentosFallidos < MAX_INTENTOS) {
    let codigoIngresado = prompt("Ingresa el codigo de autenticacion de 2 pasos:");

    if (codigoIngresado === CODIGO) {
        autenticado= true;
        alert("Codigo correcto. Acceso consedido");
    } else{
        intentosFallidos++;
        let intentosRestantes= MAX_INTENTOS - intentosFallidos;
       
        if (intentosRestantes> 0) {
            alert(`❌ Codigo incorrecto, te quedan ${intentosRestantes} intentos`);
        }
    }

}

if (!autenticado) {
    alert("🔒 Cuenta bloqueada, se te acabaron los intentos.")
}

// Tarea 4

let totalHoras = 0;
const DIAS_SEMANA = 7;

for (let i = 1; i <= DIAS_SEMANA; i++) {
    let entrada = prompt(`Día ${i}: ¿Cuántas horas vas a dedicar a estudiar hoy?`);

    if (isNaN(entrada) || entrada < 0) {
        alert("❌ Valor inválido. Por favor, ingrese un número mayor o igual a 0.");
        i--; 
      
    }

    totalHoras += entrada;
}

let promedio = totalHoras / DIAS_SEMANA;

alert(`📊 Resumen de la semana:\n- Total de horas estudiadas: ${totalHoras} hs.\n- Promedio diario: ${promedio} hs/día.`);
console.log(`Total horas: ${totalHoras}. Promedio: ${promedio}`);


// Tarea 5

let totalAcumulado = 0;
let continuar = "si";

while (continuar.toLowerCase() === "si") {
    let precioIngresado = prompt(`Total actual en el carrito: ${totalAcumulado}\nIngrese el precio del producto:`);
    let precio = parseFloat(precioIngresado);

    if (isNaN(precio) || precio <= 0) {
        alert("❌ Precio inválido. Ingrese un número mayor a 0.");
    }

    totalAcumulado += precio;

    continuar = prompt("¿Desea agregar otro producto al carrito? (Escriba 'si' para continuar o cualquier otra cosa para salir)");
}

console.log(`Total bruto antes del descuento: ${totalAcumulado}`);

if (totalAcumulado > 5000) {
    let descuento = totalAcumulado * 0.10; 
    let totalConDescuento = totalAcumulado - descuento;
    
    alert(`¡Has obtenido un 10% de descuento!\nTotal original: $${totalAcumulado}\nDescuento aplicado: -$${descuento}\nTotal a pagar: $${totalConDescuento}`);
    console.log("¡Has obtenido un 10% de descuento!");
} else {
    alert("Total a pagar:" + totalAcumulado);
}