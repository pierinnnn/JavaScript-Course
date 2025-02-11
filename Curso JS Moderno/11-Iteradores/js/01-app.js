//for (let i = 0; i <= 10; i += 2) {
//    console.log(`Numero ${i}`)
//}

//for( let i=1; i<=20; i++) {
//    if ( i % 2 === 0 ) {
//        console.log(`El numero ${i} es par`)
//    } else {
//        console.log(`El numero ${i} es impar`)
//    }
//}

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200 },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]

for ( let i=0; i<carrito.length; i++) {
    console.log(carrito[i].nombre)
}