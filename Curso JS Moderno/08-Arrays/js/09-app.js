const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200 },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]




for(let i=0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Metodo                  Funcion
// "Juan".hola()          hola()


carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )