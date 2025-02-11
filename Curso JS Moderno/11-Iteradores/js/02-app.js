// Continue rompe un ciclo mas no todo el iterador
// Break rompe la iteracion entera y ya no ejecuta

//for (let i=0; i<=10; i++) {
//    if( i===5 ){
//        console.log('Este es el 5');
//        continue;
//    }
//    console.log(`Numero: ${i}`)
//}

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200, descuento: true },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]

for(let i=0; i<carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} esta en descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}
