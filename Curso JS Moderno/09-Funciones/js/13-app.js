const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion... ${id}`),

    pausar: () => console.log(`Pausando cancion...`),

    borrar: id => console.log(`Borrando cancion... ${id}`),

    crearPlaylist: nombre => console.log(`Creando playlist de nombre ${nombre}`),

    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist de nombre ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('He hee definitivo');
reproductor.reproducirPlaylist('He hee definitivo');