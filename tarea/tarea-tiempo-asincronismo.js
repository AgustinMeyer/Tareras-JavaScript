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
            temporizador = null;
            btnIniciar.disabled= false;
            btnIniciar.textContent= "Reiniciar";
            temporizador = null;
            setTimeout(()=>{
                contadorElemento.textContent = "10";
            },1500)
            
        }

    },1000); 
})

/*
Ejercicio 2: "El Semáforo Inteligente" (setTimeout encadenado)
Consigna: Simula el comportamiento de un semáforo en la pantalla. Crea un círculo (o un cuadro) que cambie de color automáticamente al hacer clic en un botón "Encender Semáforo":

Empieza en Rojo (durante 3 segundos).

Pasa automáticamente a Amarillo (durante 2 segundos).

Pasa automáticamente a Verde (durante 3 segundos).

Tips para resolverlo:

Puedes modificar los estilos usando elemento.style.backgroundColor = "red".

Para lograr la secuencia, puedes usar setTimeout anidados o funciones estructuradas con tiempos acumulados, asegurándote de cambiar la clase o el estilo del elemento del DOM en cada paso.
*/ 
const semaforo = document.querySelector("#semaforo");
const btnSemaforo = document.querySelector("#btnSemaforo");

btnSemaforo.addEventListener("click",()=>{
    const colorOriginal = window.getComputedStyle(semaforo).backgroundColor;

    btnSemaforo.disabled = true;
    btnSemaforo.textContent = "Cambiando";
    semaforo.style.backgroundColor ="red";

   setTimeout(()=>{
    semaforo.style.backgroundColor = "yellow";
   },3000)

   setTimeout(()=>{
    semaforo.style.backgroundColor = "green"
   },5000)

   setTimeout(()=>{
    semaforo.style.backgroundColor = colorOriginal;
    btnSemaforo.disabled= false;
    btnSemaforo.textContent = "Encender semaforo";
    
   },8000)
})

/*
Ejercicio 3: "El Mensaje Flash" (setTimeout y clases de Bootstrap)
Consigna: Crea un botón que diga "Guardar Cambios" y un contenedor de alerta oculto (con la clase d-none de Bootstrap). Al hacer clic en el botón:

La alerta debe aparecer mostrando el mensaje "¡Datos guardados con éxito!".

Pasados 3 segundos, la alerta debe desaparecer automáticamente volviendo a ocultarse.

Tips para resolverlo:

Para mostrar y ocultar la alerta, utiliza classList.remove('d-none') y classList.add('d-none').

El setTimeout será el encargado de ejecutar la línea que vuelve a agregar la clase d-none tras los 3000 milisegundos.
 */

const btnGuardar = document.querySelector("#btnGuardar");
const texto = document.querySelector("#alerta");

btnGuardar.addEventListener("click",()=>{
    texto.classList.remove("d-none");
    texto.textContent = "Datos Guardados";

    setTimeout(()=>{
        texto.classList.add("d-none");
    },3000)
})

/*
Ejercicio 4: "Buscador de Usuario" (async/await y fetch)
Consigna: Crea un botón que diga "Cargar Usuario" y una tarjeta vacía en el HTML. Al hacer clic en el botón, utiliza async/await y fetch para consumir la API pública de JSONPlaceholder ([https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)). Una vez que lleguen los datos, pinta el nombre y el correo electrónico dentro de la tarjeta en el DOM.

Tips para resolverlo:

No olvides que la función asociada al evento del botón debe declararse como async.

Recuerda el doble paso del fetch: primero obtener la respuesta y luego transformarla a JSON con await respuesta.json().

Usa template strings (`) para inyectar las propiedades del objeto recibido dentro del innerHTML de la tarjeta.
*/
const btnCargar = document.querySelector("#btnCargar");
const tarjeta = document.querySelector("#tarjeta");

btnCargar.addEventListener("click",async()=>{
    btnCargar.disabled= true;
    btnCargar.textContent = "Cargando..."
    tarjeta.innerHTML = `<p>Obteniendo datos del Servidor...</p>`

    const respense = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const usuario = await respense.json();
    tarjeta.innerHTML =  `
        <div class="card-body p-0">
            <h5 class="card-title fw-bold text-primary">${usuario.name}</h5>
            <p class="card-text text-muted mb-0">📬 ${usuario.email}</p>
        </div>
    `;

    btnCargar.disabled = false;
    btnCargar.textContent = "Cargar Usuario";
})

/*
Ejercicio 5: "Galería de Personajes con Indicador de Carga" (Asincronismo completo)
Consigna: Crea una aplicación que al presionar un botón "Buscar Personaje" muestre temporalmente el texto "Cargando..." en pantalla. Luego, mediante una fetchAPI de Rick and Morty ( [https://rickandmortyapi.com/api/character/5](https://rickandmortyapi.com/api/character/5)), obtiene un personaje, borra el texto de carga y muestra su nombre y su imagen en el DOM.

Consejos para resolverlo:

Antes de hacer el await fetch(...), actualice el contenedor #resultadocon un texto o un Spinner de Bootstrap para simular la espera.

Cuando obtengas los datos de la API, reemplaza el contenido del contenedor utilizando las propiedades data.namey data.imagedel objeto que te devuelve la API.
*/
const btnPersonaje = document.querySelector("#btnPersonaje");
const resultado = document.querySelector("#resultado");

btnPersonaje.addEventListener("click",async()=>{
    btnPersonaje.disabled = true;
    resultado.innerHTML = `<p>Cargando...</p>`;

    const respuesta = await fetch("https://rickandmortyapi.com/api/character/5");
    const data = await respuesta.json();
    resultado.innerHTML= `
    <div class="card" style="width: 14rem;">
        <img src="${data.image}" class="card-img-top" alt="${data.name}">
        <div class="card-body text-center">
            <h5 class="card-title fw-bold mb-0">${data.name}</h5>
        </div>
    </div>`

    btnPersonaje.disabled = false;
    
})