const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//A pesar de que un producto es Const, sus propiedades se pueden modificar
producto.disponible = false;

delete producto.precio;

console.log(producto);
