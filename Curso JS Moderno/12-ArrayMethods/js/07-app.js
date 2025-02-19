const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2, meses3, 'Otro Mes');
console.log(resultado);

// spread operator: crea una copia ... del arreglo dejando el original tal cual (para usar los 3 puntos al inicio, debe ser un arreglo si o si)
const resultado2 = [...meses,...meses2, ...meses3, 'OtroMes'];
console.log(resultado2);

