const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Filter crea un arreglo con la condicion que establezcas
let resultado;

resultado = carrito.filter( producto => producto.precio > 400 );

resultado = carrito.filter( producto => producto.precio < 600 );

resultado = carrito.filter( producto => producto.nombre !== 'Audifonos' );

resultado = carrito.filter( producto => producto.nombre === 'Audifonos' );

console.log(resultado);