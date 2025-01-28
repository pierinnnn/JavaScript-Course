const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.Js');  

// El parentesis es necesario cuando se tienen 2 parametros
const aprendiendo2 = (tecnologia, tecnologia2) =>`Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('Python', 'C++'));     