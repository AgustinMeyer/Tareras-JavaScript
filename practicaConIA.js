/*
Consigna: El Optimizador de PresupuestoImagina que estás planeando unas vacaciones y tienes una lista de gastos estimados en dólares (vuelo, hotel, excursiones, comida, etc.). Tu objetivo es filtrar los gastos que se consideran "caros" (para ver dónde puedes recortar), aplicarles un impuesto del 15% que no habías calculado y obtener una lista final con los nombres de esos gastos caros y sus nuevos precios.Pasos que debe realizar tu script:Los Datos Iniciales: Crea un array de objetos llamado gastosViaje. Cada objeto debe tener nombre (string) y precio (number).
Crear la Función: Desarrolla una función reutilizable llamada analizarGastosCaros que reciba por parámetro una lista de gastos.La Lógica dentro de la Función (Encadenamiento de Métodos):Paso 1: Usa .filter() para quedarte solo con los gastos cuyo precio sea mayor o igual a $100.Paso 2: Conecta un .map() inmediatamente después del filtro. Este mapa debe transformar cada objeto en un string de texto amigable que muestre el nombre del gasto y su precio sumándole un 15% de impuesto (multiplicando el precio por 1.15).El Formateo: Asegúrate de que el precio final dentro del string tenga exactamente 2 decimales usando .toFixed(2).El Cierre: Ejecuta la función pasándole el array gastosViaje e imprime el nuevo array resultante en la consola.
*/

const gastosViaje = [
    { nombre: "Vuelo", precio: 850.50 },
    { nombre: "Hotel", precio: 420.00 },
    { nombre: "Cena Show", precio: 45.30 },
    { nombre: "Excursión Buceo", precio: 120.80 },
    { nombre: "Imanes de recuerdo", precio: 15.00 }
];

const analizarGastosCaros = (listaGastos) =>{
    return listaGastos
    .filter(gasto => gasto.precio >= 100)
    .map(gasto => {
        let precioConImpuesto = gasto.precio *1.15;
        return `${gasto.nombre} con impuesto: ${precioConImpuesto.toFixed(2)}`
    })

}

const probrandoFuncion = analizarGastosCaros(gastosViaje)
console.log(probrandoFuncion);

/*
 Consigna: El Buscador de ProductosVas a crear una función que reciba una lista de productos electrónicos y aplique tres filtros en simultáneo: por texto de búsqueda, por precio máximo, y que solo devuelva los productos que tengan stock disponible.Pasos que debe realizar tu script:Los Datos Iniciales: Crea un array de objetos llamado catalogo. Cada producto tendrá nombre (string), precio (number) y tieneStock (boolean).
 Crear la Función: Desarrolla una función flecha llamada filtrarTienda que reciba tres parámetros:listaProductos (el array)textoBuscado (un string, ej: "celular")precioMaximo (un número, ej: 500000)La Lógica dentro de la Función (.filter() + .map()):Paso 1 (.filter): Filtra la lista asegurándote de que el producto cumpla tres condiciones al mismo tiempo (puedes usar el operador &&):Que tieneStock sea true.Que el precio sea menor o igual al precioMaximo.Que el nombre contenga el textoBuscado. Tip: Usa .toLowerCase() y .includes() para que no falle con mayúsculas.Paso 2 (.map): Transforma los productos que sobrevivieron al filtro para devolver una frase limpia que combine el nombre y el precio redondeado con .toFixed(2).El Cierre: Ejecuta la función pasándole el catálogo, buscando la palabra "celular" y con un presupuesto máximo de 500000. Imprime el resultado en consola.

 */
const catalogo = [
    { nombre: "Celular Samsung", precio: 450000, tieneStock: true },
    { nombre: "Auriculares Bluetooth", precio: 35000, tieneStock: false },
    { nombre: "Televisor Smart 4K", precio: 750000, tieneStock: true },
    { nombre: "Cargador Rápido Tipo C", precio: 12000, tieneStock: true },
    { nombre: "Funda para Celular", precio: 5000, tieneStock: true }
];

const filtrarTienda = ( listaDePruductos, textoBuscado, precioMaximo) =>{
    return listaDePruductos
    .filter(producto => producto.nombre.toLowerCase().includes(textoBuscado.toLowerCase()) && producto.precio <= precioMaximo && producto.tieneStock == true)
    .map(producto => {
        return `${producto.nombre} - Precio: ${producto.precio}`
    })
}

const busquedaUsuario = filtrarTienda(catalogo, "celular", 500000);
console.log(busquedaUsuario);