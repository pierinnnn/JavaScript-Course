document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    
    // Asignar eventos
    inputEmail.addEventListener('input', validar); // No se pone parentesis, ya que tiene que esperar que ocurra el evento

    inputAsunto.addEventListener('input', validar); // Se puede usar blur o input, input es en tiempo real

    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault(); // Evita el comportamiento por defecto del btn
        // Reiniciar el objeto email
        resetearFormulario();
    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetearFormulario();

            // Crear alerta de enviado
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'mt-10', 'font-bold', 'rounded-lg', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado con éxito';
            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove(); 
            }, 3000);
        }, 3000);
    }

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); // Se le pasa el elemento padre para inyectar el error debajo del campo
            email[e.target.name] = ''; // Asignar el valor vacío al objeto email en caso falle
            comprobarEmail();
            return; // Para que no se ejecute el resto del código
        } 
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(`El email que ingresaste no es válido`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return; // Para que no se ejecute el resto del código
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores a la variable email
        email[e.target.name] = e.target.value.trim().toLowerCase(); 

        // Comprobar el objeto email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P'); //Se recomienda usar mayus 
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'text-sm', 'uppercase', 'font-bold'); // Agregar clase al elemento

        // Inyectar el error al form del HTML
        referencia.appendChild(error);
        // formulario.innerHTML = ''; Limpiar el formulario
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove(); // Eliminar la alerta anterior
        }
    }

    function validarEmail(email){
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')) { // Comprueba si hay algún campo vacío
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return; // Detiene la ejecución de la función
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false; // Habilitar el boton
    }

    function resetearFormulario(){
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }
});