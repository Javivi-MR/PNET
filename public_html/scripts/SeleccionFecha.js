$( function() {
    $( "#fecha" ).datepicker({
      numberOfMonths: 1,
      showButtonPanel: true,
      minDate: new Date(), // Establece la fecha mínima como la fecha actual
    });
  
    // Evita que se escriba en el campo de fecha
    $('#fecha').on('keydown', function(event) {
      event.preventDefault();
    });
  });