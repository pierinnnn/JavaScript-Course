localStorage.setItem('nombre', 1); //LocalStorage solo almacena strings, no arreglos ni otros elementos
// Sin embargo, con metodos como: 

producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300
}
const productoString = JSON.stringify(producto);
//console.log(productoString); // Ahora es un string con la forma de un producto
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Agosto', 'Julio'];
localStorage.setItem('meses', JSON.stringify(meses));