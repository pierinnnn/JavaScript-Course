"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Seal permite unicamente modificar las propiedades existentes del objeto
Object.seal( producto );

producto.disponible = false;
//producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isSealed(producto));