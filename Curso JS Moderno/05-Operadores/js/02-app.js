const numero1= 20;
const numero2= "20";
const numero3= 30;

//Revisar si 2 numeros son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2);

//Comparador estricto, tambien se fija en el tipo de dato
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente
const pass1 = "admin";
const pass2 = "Admin";

console.log(pass1 != pass2);
console.log(numero1 != numero2);

//Comparador estricto 
console.log(numero1 !== parseInt(numero2));