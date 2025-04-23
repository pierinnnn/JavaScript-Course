// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets)
        crearHTML();
    })
}

// Funciones

function agregarTweet(e){
    e.preventDefault();

    //Text Area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    //Validacion del text area
    if(tweet=== ''){
        mostrarError('El tweet no puede estar vacio');
        return; // Evita que se ejecute el resto de codigo
    }
    
    //Identificador de tweets con date.now
    const tweetObj = {
        id: Date.now(),
        tweet // Es como decir tweet = tweet
    }

    //Agregar al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    //Crear el HTML al agregar un  tweet
    crearHTML();
    formulario.reset(); //Limpia lo que hay escrito en el formulario
}

function mostrarError(mensaje){
    const mensError = document.createElement('p');
    mensError.textContent = mensaje;
    mensError.classList.add('error');
    //Insertarlo en el html
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensError);

    //Eliminar pasado un tiempo
    setTimeout(()=> {
        mensError.remove()
    },3000)
}

function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            //Crear un boton de eliminar
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.textContent = 'X';

            //Funcion de eliminar
            btn.onclick = () => {
                borrarTweet(tweet.id)
            }
            
            //Crear HTML
            const li = document.createElement('li');

            //Agregar el tweet
            li.innerText = tweet.tweet;

            //Agregar el boton
            li.appendChild(btn)

            //Insertar
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina el tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id != id);
    crearHTML();
}

//Limpiar HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}