function cambiarInfoSala() {    // Función que cambia la información de la sala según la opción seleccionada en el select
    
    let opcionSeleccionada = document.getElementById("sala").value; // Obtenemos el valor de la opción seleccionada
    switch(opcionSeleccionada) // Comprobamos el valor de la opción seleccionada
    {
        case 'SalaDeEstudiosGeneralSerrano':    // Si la opción seleccionada es la sala de estudios General Serrano
            document.getElementById("ImagenSala").src = "./images/sala1.jpeg"; // Cambiamos la imagen de la sala
            document.getElementById("inf1").innerHTML = "Sala alojada en la biblioteca Luis Berenguer, San Fernando."; // Cambiamos la información de la sala
            document.getElementById("inf2").innerHTML = "Aforo máximo: 10 personas."; // Cambiamos la información de la sala
            document.getElementById("TituloSala").innerHTML = "Sala de estudios General Serrano";   // Cambiamos el título de la sala
        break; 
        // Repetimos el proceso para las demás opciones
        case 'SalaDeEstudiosMaríaLeón':
            document.getElementById("ImagenSala").src = "./images/sala2.jpeg";
            document.getElementById("inf1").innerHTML = "Sala alojada en la Biblioteca Pública Municipal, El Puerto de Santa María.";
            document.getElementById("inf2").innerHTML = "Aforo máximo: 6 personas.";
            document.getElementById("TituloSala").innerHTML = "Sala de estudios María León";
        break;
        case 'SalaDeMeetingPoint':
            document.getElementById("ImagenSala").src = "./images/sala3.jpeg";
            document.getElementById("inf1").innerHTML = "Sala alojada en el edificio de la juventud, Cádiz.";
            document.getElementById("inf2").innerHTML = "Aforo máximo: 20 personas.";
            document.getElementById("TituloSala").innerHTML = "Sala de MeetingPoint";
        break;
    }
}