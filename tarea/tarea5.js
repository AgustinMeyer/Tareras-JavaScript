// tarea 1 Tienes una lista de temperaturas en grados Celsius. Crea una función llamada convertirAFahrenheitque reciba este array y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.

const gradosCelsius = [0, 10, 20, 30, 40]
const convertirAFahrenheit = gradosCelsius.map((grado, i )=> {
    let convertir = (grado * 9/5) + 32;
    return convertir;
})

console.log(convertirAFahrenheit)

// tarea 2  Tienes una matriz de números que representan edades de personas. Crea una función llamada obtenerMayoresDeEdadque usa .filter()para devolver un array solo con las edades que sean 18 o más.
const edades = [12, 18, 25, 10, 30, 15]
const obtenerMayoresDeEdad = (listaDeEdades) =>{
    return listaDeEdades.filter(edad => edad >= 18);
}

const mayoresDeEdad = obtenerMayoresDeEdad(edades)
console.log(mayoresDeEdad);

// tarea 3  Tienes una matriz de cadenas que representan códigos de productos. Crea una función llamada buscarProductoque recibe el array y un código específico. La función debe usar .find()para recuperar el código si existe, o "No encontrado" si no está.
const codigoDeProductos = ["A10", "B20", "C30", "D40"]

const buscarProducto =(listaCodigos, codigoBuscado) => {
    const codEncontrado = listaCodigos.find(codigo => codigo === codigoBuscado);
    return codEncontrado ? codEncontrado : "No encontrado";
};

console.log(buscarProducto(codigoDeProductos,"C30"));
console.log(buscarProducto(codigoDeProductos, "a40"));

// tarea 4  Tienes una matriz de números que representan las ventas del día. Crea una función llamada calcularTotalVentasque utiliza .reduce()para sumar todas las ventas y devolver el total.

const ventasDelDia = [100, 250, 50, 300, 120]

const calculaTotalVentas = ventasDelDia.reduce((accum,valor) => accum + valor, 0)

console.log(calculaTotalVentas)

// tarea 5   Crea un array llamado inventarioque contiene 3 objetos. Cada objeto debe representar un producto con las propiedades: nombre(cadena) y precio(número). Crea una función llamada listarPreciosque graba el array y retorna un nuevo array solo con los precios usando .map().

const inventario = [
    { nombre: "procesador", precio: 300000 },
    { nombre: "Placa de Video", precio: 600000 },
    { nombre: "Memoria Ram", precio: 80000}
];

const listaDePrecios= (listaProductos) =>{
    return listaProductos.map(producto => producto.precio);
}

const soloPrecios = listaDePrecios(inventario)
console.log(soloPrecios);
