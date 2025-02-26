const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keydown', (e) => {
    if(e.target.value === ''){
        console.log('Fallo la validacion');
    }
})

// blur - sirve para validaciones
// copy - cuando copias algo
// paste - cuando pegas algo
// cut - cuando cortas algo
// input - envia a la consola el input