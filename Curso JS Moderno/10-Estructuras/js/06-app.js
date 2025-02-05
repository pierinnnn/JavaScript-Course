const usuario = true; 
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Eres usuario y puedes pagar')
} else if (!usuario && !puedePagar){
    console.log('No puedes pagar')
} else if (!usuario) {
    console.log('No es usuario, inicie sesion...')
} else if (!puedePagar) {
    console.log('Fondos insuficientes')
} 