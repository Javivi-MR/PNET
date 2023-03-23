$(function() {
    $('#sala').change(function() 
    {
        var opcionSeleccionada = $(this).val();
        switch(opcionSeleccionada) 
        {
            case 'SalaDeEstudiosGeneralSerrano':
                $('#ImagenSala').attr('src', './images/sala1.jpeg');
                $('#inf1').html('Sala alojada en la biblioteca Luis Berenguer, San Fernando.');
                $('#inf2').html('Aforo máximo: 10 personas.');
                $('#TituloSala').html('Sala de estudios General Serrano');
            break;
            case 'SalaDeEstudiosMaríaLeón':
                $('#ImagenSala').attr('src', './images/sala2.jpeg');
                $('#inf1').html('Sala alojada en la Biblioteca Pública Municipal, El Puerto de Santa María.');
                $('#inf2').html('Aforo máximo: 6 personas.');
                $('#TituloSala').html('Sala de estudios María León');
            break;
            case 'SalaDeMeetingPoint':
                $('#ImagenSala').attr('src', './images/sala3.jpeg');
                $('#inf1').html('Sala alojada en el edificio de la juventud, Cádiz.');
                $('#inf2').html('Aforo máximo: 20 personas.');
                $('#TituloSala').html('Sala de MeetingPoint');
            break;
        }
    });
  });