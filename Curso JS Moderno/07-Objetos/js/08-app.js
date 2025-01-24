"use strict"; //Se aplican ciertas reglas para la hora de escribir codigo

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//No permite manipular al objeto de ninguna manera
Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isFrozen());