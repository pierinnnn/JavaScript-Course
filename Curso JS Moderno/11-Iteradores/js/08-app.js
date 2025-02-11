const automovil = {
    modelo: 'Camaro',
    year: 2005,
    motor: '6.0'
}

// for in permit iterar sobre un objeto
//for(let propiedad in automovil) {
//    console.log(`${automovil[propiedad]}`)
//}

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}