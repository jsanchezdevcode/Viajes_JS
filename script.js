
import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

        //Remover el activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //Agrega la clase "active" al enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente según el enlace
        let contendio = obtenerContenido(this.textContent);

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contendio.titulo;
        subtituloElemento.innerHTML = contendio.subtitulo;
        parrafoElemento.innerHTML = contendio.parrafo;
        precioElemento.innerHTML = contendio.precio;
    });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
        'Asuncion': asuncion,
        'Buenos Aires': buenosaires,
        'Brasilia': brasilia,
        'San Lorenzo': sanlorenzo,
    }
    return contenido[enlace];
}