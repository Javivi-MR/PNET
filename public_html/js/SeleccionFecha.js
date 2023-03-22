$( function() {
    $( "#fecha" ).datepicker({
      numberOfMonths: 1,
      showButtonPanel: true,
      minDate: 1 // Establece la fecha mínima como mañana
    });
  
    // Evita que se escriba en el campo de fecha
    $('#fecha').on('keydown', function(event) {
      event.preventDefault();
    });
  });