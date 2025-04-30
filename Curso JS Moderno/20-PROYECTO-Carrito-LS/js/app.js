// Variables
const carrito = document.querySelector('#carrito');

const contenedorCarrito =document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListener();

function cargarEventListener() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos del local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []; // Si no hay nada, el arreglo sera vacio, no null
        carritoHTML();
    })

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos el arreglo
        localStorage.setItem('carrito', articulosCarrito);
        limpiarHTML(); // Eliminamos todo el HTML
    })
}

// Funciones
function agregarCurso(e){
    e.preventDefault(); // Esto se usa para evitar que al dar click, se suba la pantalla
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoABorrar = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => {
            if (curso.id !== cursoABorrar) {
                return curso;
            } else {
                curso.cantidad--;
                return curso.cantidad > 0;
            }
        });
        console.log(articulosCarrito);
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    // Creamos un objeto con el contenido del curso seleccionado
    const cursoInfo = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === cursoInfo.id ); // Revisa si el id del curso seleccionado ya existe en el carrito
    if(existe){
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === cursoInfo.id ) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna objetos no duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, cursoInfo];
    }

    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();
    
    // Recorre el el carrito y genera el HTML

    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}<td/>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href = "#" class = "borrar-curso" data-id = "${id}" > X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

    //Agregar carrito de compras al local Storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    //contenedorCarrito.innerHTML = '';

    // Forma rapida 
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); // Elimina el primer hijo del tbody, hasta eliminar todos  
    }
}
