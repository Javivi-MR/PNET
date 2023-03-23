function EsAlfabetico(NombreApellido)
{
    let expresionAlfabetica = /^[a-z]+\s?[a-z]*$/i;
    return expresionAlfabetica.test(NombreApellido) && !NombreApellido.includes('\'') && !NombreApellido.includes('\"');
}

function EsCorreo(Correo)
{
    let expresionCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    return expresionCorreo.test(Correo);
}


//funcion para validar numero telefonico
function EsNumerico(Telefono)
{
    let expresionTelefono = /^[0-9]+$/i;
    return expresionTelefono.test(Telefono);
}

function TieneCaracteresEsp(cadena)
{
    //expresion regular de caracteres validos para un correo
    return  !cadena.includes('\'') && !cadena.includes('\"');
}

$(function ValidacionNombre() //Comprobacion de que el usuario introduzca el nombre de forma correcta (Incluye espacio para nombre compuesto Ej: Francisco Javier)
{    
    $('#nombre').on('input', function() 
    {
        let nombre = $(this).val();
        if (EsAlfabetico(nombre) || nombre === '') 
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

$(function ValidacionApellidos() //Comprobacion de que el usuario introduzca los apellidos de forma correcta
{    
    $('#apellidos').on('input', function() 
    {
        let apellidos = $(this).val();
        if (EsAlfabetico(apellidos) || apellidos === '') 
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

$(function ValidacionCorreo() //Comprobacion de que el usuario introduzca el correo de forma correcta
{
    $('#correo').on('input', function()
    {
        let correo = $(this).val();
        if (TieneCaracteresEsp(correo) || correo === '')
        {
            $(this).removeClass("error");
        }
        else
        {
            alert("El correo introducido no es valido");
            $(this).val(''); // Borrar el valor ingresado por el usuario
            $(this).addClass("error"); // Agregar la clase CSS "error" al input
        }
    });
});

$(function ValidacionTelefono() {    //Comprobacion de que el usuario introduzca el telefono movil de forma correcta
    $('#telefono').on('input', function() 
    {
        let telefono = $(this).val();
        if (EsNumerico(telefono) || telefono === '')
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


$(function ValidacionNumeroPersonas() {    
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

        let numPersonasRaw = $(this).val()
        let numPersonas = parseInt(numPersonasRaw);

        if(!EsNumerico(numPersonasRaw) || numPersonas > maxPersonas) 
        {
            alert("Se debe seleccionar un numero de personas entre 1 y " + maxPersonas);
            $(this).val(''); // Borrar el valor ingresado por el usuario
            $(this).addClass("error"); // Agregar la clase CSS "error" al input
        }
        else
        {
            $(this).removeClass("error")
        }
    });
});

/* Validacion de las horas de reserva 
    
    var checkboxes = document.querySelectorAll('.HorasDispDiv input[type="checkbox"]');
    var checkboxesSeleccionados = []; // arreglo para mantener el registro de checkboxes seleccionados

    for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        checkboxesSeleccionados.push(checkboxes[i]);
    }
    }

*/