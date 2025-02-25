const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

// Agregando el href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

//enlace.onclick = miFuncion;

// Seleccionar la navegacion 
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

//function miFuncion() {
//    alert('Diste Click');
//}

// Crear parrafos cada uno con su clase

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Rauw Alejandro';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$1020 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.append(parrafo1, parrafo2, parrafo3)

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Texto Alternativo";

// Crear el card que almacena todo
const card = document.createElement('div');
card.classList.add('card');
card.append(imagen,info);

// Selector
const allCards = document.querySelector('.hacer .contenedor-cards');
// Puedes usar insertBefore o append, depende de donde lo quieras insertar
allCards.insertBefore(card, allCards.children[1]);
console.log(card);