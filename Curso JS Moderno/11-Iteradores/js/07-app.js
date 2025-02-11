const pendientes = ['Tarea', 'Comer', 'Trabajar en el proyecto', 'Estudiar JavaScript']

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Pochacco', precio: 150 },
    { nombre: 'Tobi', precio: 200 },
    { nombre: 'Oso de Peluche', precio: 1700 },
    { nombre: 'Television Plasma', precio: 4100 },
    { nombre: 'Mazda mx 5', precio: 3000 }
]

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for( let producto of carrito) {
    console.log(producto.nombre);
}

