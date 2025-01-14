const producto = 'Monitor 20 Pulgadas';

//.repeat va a permitir repetir una cadena de texto

const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un String
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "))

const hobbies = 'Leer, caminar, jugar, ver'
console.log(hobbies.split(", "))

const tweet = "Se rayan #Locura"
console.log(tweet.split("#"))
