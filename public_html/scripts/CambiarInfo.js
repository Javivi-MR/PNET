$(function() {
    $('#sala').change(function() {
        var opcionSeleccionada = $(this).val();
        switch(opcionSeleccionada) 
        {
            case 'SalaDeEstudiosGeneralSerrano':
                $('#ImagenSala').attr('src', './images/sala1.jpg');
                $('#inf1').html('Sala alojada en la biblioteca Luis Berenguer, San Fernando.');
                $('#inf2').html('Aforo máximo: 10 personas.');
            break;
            case 'SalaDeEstudiosMaríaLeón':
                $('#ImagenSala').attr('src', './images/sala2.jpg');
                $('#inf1').html('Sala alojada en la Biblioteca Pública Municipal, El Puerto de Santa María.');
                $('#inf2').html('Aforo máximo: 6 personas.');
            break;
            case 'SalaDeMeetingPoint':
                $('#ImagenSala').attr('src', './images/sala3.jpg');
                $('#inf1').html('Sala alojada en el edificio de la juventud, Cádiz.');
                $('#inf2').html('Aforo máximo: 20 personas.');
            break;
        }
    });
  });