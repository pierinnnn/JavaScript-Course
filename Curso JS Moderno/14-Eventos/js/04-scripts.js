const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); // Evita que mandes datos por un action o un metodo, sino que lo hace desde aqui mismo
    console.log('Consultando api...');
    console.log(e.target.action);
}