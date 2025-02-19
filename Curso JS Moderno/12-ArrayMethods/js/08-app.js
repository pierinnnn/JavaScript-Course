const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// La programacion funcional indica que evitemos modificar un elemento original, sino crear copias

// spread operator con arreglo con indices
const meses2 = ['Agosto', ...meses];
console.log(meses2);

const producto = {
    nombre: 'Disco Duro', precio: 300
};

const carrito2 = [...carrito, producto];
console.log(carrito2);
