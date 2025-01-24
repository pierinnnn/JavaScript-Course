const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Extrae una propiedad del objeto y crea la variable con esa (Destructuring)
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);