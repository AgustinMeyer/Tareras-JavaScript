const btnAgregar = document.querySelector('#btnAgregar');
const inputTarea = document.querySelector('#inputTarea');
const listaTareas= document.querySelector('#listaTareas');

btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value;
    if (texto.trim() === "") {
        alert("Por favor, escribe una tarea válida. No puede estar vacía.");
        inputTarea.focus(); // Devolvemos el foco al input
        return; }
    const nuevoLi = document.createElement('li');
     nuevoLi.className = "list-group-item d-flex justify-content-between align-items-center";
    nuevoLi.innerHTML = `${texto}<button class="btn btn-danger btn-borrar btn-sm">X</button>`;
    listaTareas.append(nuevoLi);
    inputTarea.value = "";
    inputTarea.focus();
    const btnBorrar = nuevoLi.querySelector('.btn-borrar');
    btnBorrar.addEventListener('click',() =>{
        nuevoLi.remove();
    })
})