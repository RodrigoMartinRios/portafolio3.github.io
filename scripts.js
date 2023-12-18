
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      mostrarBienvenida();
    }, 500);

    function mostrarBienvenida() {
      var mensajeBienvenida = document.querySelector(".bienvenida");

      setTimeout(function() {
        mensajeBienvenida.style.backgroundColor = "#050020"; /* Color final del fondo */
      }, 3); /* Tiempo antes de cambiar el color de fondo */

      setTimeout(function() {
        var letras = document.querySelectorAll(".letras span");
        letras.forEach(function(letra, index) {
          setTimeout(function() {
            letra.style.opacity = 1;
            setTimeout(function() {
              letra.style.opacity = 0;
            }, 2000); /* Cambia el tiempo que las letras están visibles (en milisegundos) */
          }, index * 200); /* Espaciado entre la aparición de cada letra (en milisegundos) */
        });

        setTimeout(function() {
          mensajeBienvenida.style.display = "none";
          mostrarPortafolio();
        }, letras.length * 180 + 2000); /* Ajusta el tiempo total para mostrar las letras */
      }, 100); /* Tiempo antes de mostrar las letras */
    }

    function mostrarPortafolio() {
      var portafolio = document.querySelector(".portafolio");
      portafolio.style.display = "block";
    }
    
  });




//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// Agrega un evento de scroll para detectar el cambio
window.addEventListener('scroll', function() {
    var logoTexto = document.querySelector('.logo a');
    
    // Verifica la posición del scroll
    if (window.scrollY > 100) { // Ajusta este valor según el desplazamiento deseado
      logoTexto.textContent = 'Inicio'; // Cambia el texto del logo
    } else {
      logoTexto.textContent = 'Mi Portafolio'; // Revierte el texto del logo si se desplaza hacia arriba
    }
  });

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("wordpress");
      habilidades[4].classList.add("drupal");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("creatividad");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("proyect");
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const tarjeta = document.querySelector('.tarjeta');
  
    tarjeta.addEventListener('click', function () {
      tarjeta.classList.toggle('girar');
    });
  });
  
  


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// configuramos el contacto por mail
function mostrarDatos(){
    var nombre= document.getElementById('nombre').value;
    var correo= document.getElementById('correo').value;
    var telefono= document.getElementById('telefono').value;
    var tema= document.getElementById('Tema').value;
    var mensaje= document.getElementById('mensaje').value;

 // Crear un objeto JSON con los datos capturados
 var datosJSON = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    tema: tema,
    mensaje: mensaje
};

// Convertir el objeto JSON a cadena
var datosEnCadena = JSON.stringify(datosJSON);

// Almacenar los datos en localStorage
localStorage.setItem('consulta', datosEnCadena);

 // Mostrar el mensaje enviado correctamente
 mostrarMensajeEnviado();

 // Mostrar la consulta en la consola al enviar el mensaje
 mostrarConsultaEnConsola();


    limpiarFormulario();
}

//funcion para limpiar la pantalla del formulario

function limpiarFormulario(){
  document.getElementById('Formulario').reset();
}


function mostrarConsultaEnConsola() {
    // Recuperar los datos almacenados en localStorage
    var consultaGuardada = localStorage.getItem('consulta');

    // Verificar si hay una nueva consulta y mostrarla en la consola
    if (consultaGuardada) {
        var datosRecuperados = JSON.parse(consultaGuardada);
        
        // Mostrar los detalles de la consulta en la consola
        console.groupCollapsed('Nueva consulta');

        for (var key in datosRecuperados) {
            if (datosRecuperados.hasOwnProperty(key)) {
                console.log(`${key}: ${datosRecuperados[key]}`);
            }
        }

        console.groupEnd();
    }
}


// Función para mostrar el mensaje enviado correctamente
function mostrarMensajeEnviado() {
    var mensajeEnviado = document.getElementById('mensajeEnviado');
    mensajeEnviado.style.display = 'block';

       // Ocultar el mensaje después de 3 segundos
       setTimeout(function() {
        mensajeEnviado.style.display = 'none';
    }, 2000);
}


