const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo a la navegacion');
    nav.style.backgroundColor = 'Transparent'
});

nav.addEventListener('dblclick', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'white'
});

// mousedown - similar al click
// mouseup - cuando sueltas el click
// dblclick - doble click
// click