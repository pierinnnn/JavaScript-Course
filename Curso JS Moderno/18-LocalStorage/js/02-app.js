const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON)); // Convierte el string a objeto, solo si tiene la forma de este

const meses = localStorage.getItem('meses');
const arrayMeses = JSON.parse(meses);
console.log(arrayMeses);