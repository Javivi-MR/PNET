function cambiarInfoSala() {
    let opcionSeleccionada = document.getElementById("sala").value;
    switch(opcionSeleccionada) 
    {
        case 'SalaDeEstudiosGeneralSerrano':
            document.getElementById("ImagenSala").src = "./images/sala1.jpeg";
            document.getElementById("inf1").innerHTML = "Sala alojada en la biblioteca Luis Berenguer, San Fernando.";
            document.getElementById("inf2").innerHTML = "Aforo máximo: 10 personas.";
            document.getElementById("TituloSala").innerHTML = "Sala de estudios General Serrano";
        break;
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