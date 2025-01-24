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

const producto4 = {
    nombre: 'Galaxy tab',
    precio: 1500
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);
//console.table(carrito);

// Eliminar ultimo elemento de un arreglo...
//carrito.pop()
//console.table(carrito);

//Eliminar del inicio del arreglo
//carrito.shift();
//console.table(carrito);

carrito.splice(1,1);
console.table(carrito);