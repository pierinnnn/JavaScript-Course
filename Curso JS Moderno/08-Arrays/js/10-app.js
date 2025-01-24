const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200 },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]

const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo2);
console.log(nuevoArreglo);