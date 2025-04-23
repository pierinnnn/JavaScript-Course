localStorage.removeItem('nombre');

// Actualizar un registro
const arrayMeses = JSON.parse(localStorage.getItem('meses'));
console.log(arrayMeses);
arrayMeses.push('Diciembre');
console.log(arrayMeses);
localStorage.setItem('meses', JSON.stringify(arrayMeses));

localStorage.clear(); // Limpia todo el local storage
