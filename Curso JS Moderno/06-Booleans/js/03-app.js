const autenticado = false;

//Al comparar asi no es necesario poner if autenticado == true, es una mala practica ya que es implicito
//if(autenticado){
//    console.log("Si puedes ver netflix")
//} else {
//    console.log("No puedes ver netflix")
//}

//Operador ternario
console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado')