const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// every: todos los elementos de un arreglo deben de cumplir una condicion para que retorne un true (similar a un AND)

const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);

// some: al menos uno de los elementos de un arreglo debe de cumplir una condicion para que retorne un true (similar a un OR)

const resultado2 = carrito.some( producto => producto.precio < 200 );
console.log(resultado);