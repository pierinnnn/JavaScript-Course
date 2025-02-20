const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//console.log(encabezado.innerText); // No encuentra un texto con visibility hidden en el css
//console.log(encabezado.textContent); // Si lo encuentra sin importar
//console.log(encabezado.innerHTML); // Trae el HTML

//const nuevoHeading = 'nuevo heading'
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const image = document.querySelector('.card img');
image.src = 'img/hacer2.jpg'