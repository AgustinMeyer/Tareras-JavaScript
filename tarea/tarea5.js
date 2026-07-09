// tarea 1

const gradosCelsius = [0, 10, 20, 30, 40]
const convertirAFahrenheit = gradosCelsius.map((grado, i )=> {
    let convertir = (grado * 9/5) + 32;
    return convertir;
})

console.log(convertirAFahrenheit)

// tarea 2
const edades = [12, 18, 25, 10, 30, 15]
const obtenerMayoresDeEdad = (listaDeEdades) =>{
    return listaDeEdades.filter(edad => edad >= 18);
}

const mayoresDeEdad = obtenerMayoresDeEdad(edades)
console.log(mayoresDeEdad);

// tarea 3
const codigoDeProductos = ["A10", "B20", "C30", "D40"]

const buscarProducto =(listaCodigos, codigoBuscado) => {
    const codEncontrado = listaCodigos.find(codigo => codigo === codigoBuscado);
    return codEncontrado ? codEncontrado : "No encontrado";
};

console.log(buscarProducto(codigoDeProductos,"C30"));
console.log(buscarProducto(codigoDeProductos, "a40"));

// tarea 4

const ventasDelDia = [100, 250, 50, 300, 120]

const calculaTotalVentas = ventasDelDia.reduce((accum,valor) => accum + valor, 0)

console.log(calculaTotalVentas)

