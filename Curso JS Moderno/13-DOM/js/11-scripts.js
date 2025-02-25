const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        // Se puede usar this ya que esta haciendo referencia al objeto que mando a llamar el event (btnFlotante)
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    }
    console.log(footer.classList);
}