const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Extrae una propiedad del objeto y crea la variable con esa (Destructuring)
const { nombre } = producto;

console.log(nombre);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];
// A diferencia del objeto, tu pones el nombre para hacer el destructuring
const [ a, b, ...c ] = numeros;

console.log(c);