// forEach

const pendientes = ['Tarea', 'Comer', 'Trabajar en el proyecto', 'Estudiar JavaScript']

pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`)
} )

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200 },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]

// forEach no creea nuevo arreglo
const nuevoArreglo = carrito.forEach ( producto => producto.nombre );

// Map crea un nuevo arrglo
const nuevoArreglo2 = carrito.map ( producto => producto.nombre );

console.log(nuevoArreglo);
console.log(nuevoArreglo2);