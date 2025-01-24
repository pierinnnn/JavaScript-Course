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

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;
//Le pasas una copia del carrito y le agregas un producto
resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);