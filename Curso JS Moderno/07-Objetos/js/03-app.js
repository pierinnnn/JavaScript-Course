const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


//Agregar nueva propiedad
producto.imagen = "imagen.jpg";

//Eliminar propiedada
delete producto.disponible;

console.log(producto);

