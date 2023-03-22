$(function() {    
    let expresionAlfabetica = /^[a-z]+\s?[a-z]*$/i;
    $('#nombre').on('input', function() 
    {
        let elem = $(this).val();
        console.log(elem.match(expresionAlfabetica));
        if (elem.match(expresionAlfabetica) || elem === '') 
        {
            $(this).removeClass("error");
        }
        else
        {
            alert("El nombre solo admite caracteres alfabéticos (sin simbolos especiales como acentos)");
            $(this).val(''); // Borrar el valor ingresado por el usuario
            $(this).addClass("error"); // Agregar la clase CSS "error" al input
        }
    });
});

$(function NumeroPersonas() {    
    $('#NumPer').on('input', function() 
    {
        var opcionSeleccionada = $('#sala').val();
        let maxPersonas = 0;
        switch(opcionSeleccionada) 
        {
            case 'SalaDeEstudiosGeneralSerrano':
                maxPersonas = 10;
            break;
            case 'SalaDeEstudiosMaríaLeón':
                maxPersonas = 6;
            break;
            case 'SalaDeMeetingPoint':
                maxPersonas = 20;
            break;
        }

        let numPersonas = parseInt($(this).val());

        if (numPersonas > maxPersonas) 
        {
            alert("El numero de personas seleccionado es mayor al aforo");
            $(this).val(''); // Borrar el valor ingresado por el usuario
            $(this).addClass("error"); // Agregar la clase CSS "error" al input
        }
        else
        {
            $(this).removeClass("error")
        }
    });
});