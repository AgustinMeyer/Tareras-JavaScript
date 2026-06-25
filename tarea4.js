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
