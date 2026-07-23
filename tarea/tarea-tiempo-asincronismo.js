/*
Ejercicio 1: "La Cuenta Regresiva de Despegue" (setInterval y DOM)
Consigna: Crea una página web con un título grande que diga "10" y un botón que diga "Iniciar Cuenta Regresiva". Al hacer clic en el botón, debe comenzar un contador hacia atrás de 1 en 1 segundo hasta llegar a 0. Cuando llegue a 0, el texto del título debe cambiar a "¡Despegue! 🚀" y el contador debe detenerse automáticamente.
*/
const contadorElemento = document.querySelector("#contador");
const btnIniciar = document.querySelector("#btnIniciar");
let temporizador = null;

btnIniciar.addEventListener("click" , ()=>{
    if (temporizador !== null) return;

    btnIniciar.disabled = true;
    let cuenta = parseInt(contadorElemento.textContent);

    temporizador = setInterval(()=>{
        cuenta--;
        if(cuenta > 0){
            contadorElemento.textContent= cuenta;
        }else{
            contadorElemento.textContent= "!Despegue¡ 🚀";
            clearInterval(temporizador);

            btnIniciar.disabled= false;
            btnIniciar.textContent= "Reiniciar";
        }

    },1000); 
})