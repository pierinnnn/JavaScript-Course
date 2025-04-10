//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados   
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
})

//Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


//Funciones
function mostrarAutos(autos){
    limpiarHTML(); //Elimina el HTML previo

    autos.forEach( auto => {

        const { marca, modelo , year, puertas, transmision, color, precio} = auto //Aplicamos destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Color: ${color} - Precio: ${precio}
        `;

        //Insertar en el html
        resultado.appendChild(autoHTML);
    })
}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect(){
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de año al select
    }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor); // Funcion de alto nivel (funcion que toma otra funcion)
    //console.log(resultado)

    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda
    if(marca) { // Si la marca no esta vacia
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda
    if(year) { // Si el year no esta vacio
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda
    if(minimo) { // Si el year no esta vacio
        return auto.precio >= minimo; //Operador no estricto
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda
    if(maximo) { // Si el year no esta vacio
        return auto.precio <= maximo; //Operador no estricto
    }
    return auto;
}

function filtrarPuertas(auto){
    const{ puertas } = datosBusqueda
    if(puertas) {
        return auto.puertas === puertas;
    } else {
        return auto
    }
}

function filtrarTransmision(auto) {
    const{ transmision } = datosBusqueda
    if(transmision) {
        return auto.transmision === transmision;
    } else {
        return auto
    }
}

function filtrarColor(auto) {
    const{ color } = datosBusqueda
    if(color) {
        return auto.color === color;
    } else {
        return auto
    }
}
