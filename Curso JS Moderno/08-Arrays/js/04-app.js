const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
//Los valores de un arreglo se pueden modificar, a pesar de que sea declarado como const

meses [0] = 'Nuevo mes';
meses [17] = 'Agosto';

console.table(meses);