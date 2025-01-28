const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion... ${id}`)
    },
    pausar: function(){
        console.log(`Pausando cancion...`)
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist de nombre ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist de nombre ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('He hee definitivo');
reproductor.reproducirPlaylist('He hee definitivo');