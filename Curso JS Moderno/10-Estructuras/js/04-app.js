// Operador mayor que y menor que

const dinero = 300;
const totalApagar = 500;
const tarjeta = true;
const cheque = false;

if( dinero >= totalApagar ) {
    console.log('Si podemos pagar')
} else if( cheque ) {
    console.log('Si, tengo un cheque')
} else if( tarjeta ) {
    console.log('Tarjeta aprobada, puede pagar')
}else {
    console.log('Fondos insuficientes')
}