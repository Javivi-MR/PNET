// funcion de jQuery para seleccionar fecha atraves de un calendario 
$( function() {
    $( "#fecha" ).datepicker({
      numberOfMonths: 1,  // Muestra un mes en el calendario
      showButtonPanel: true,  
      minDate: 1 // Establece la fecha mínima como mañana
    });
  
    // Evita que se escriba en el campo de fecha
    $('#fecha').on('keydown', function(event) { 
      event.preventDefault();
    });
  });