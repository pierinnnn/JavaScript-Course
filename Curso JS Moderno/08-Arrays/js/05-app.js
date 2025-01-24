const carrito = [];

// Definir un producto

const producto = {
    nombre: 'Monitor 1 pulgada',
    precio: 300
}

const producto2 = {
    nombre: 'Iphone 15',
    precio: 1000
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

// Lo inserta al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);