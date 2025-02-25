//const primerEnlance = document.querySelector('.navegacion a');
//primerEnlance.remove();

// Eliminar desde el padre...

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);