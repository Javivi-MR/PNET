

function EsAlfabetico(NombreApellido)
{
    let expresionAlfabetica = /^[a-z]+\s?[a-z]*$/i;
    return expresionAlfabetica.test(NombreApellido);
}

function EsCorreo(Correo)
{
    let expresionCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    return expresionCorreo.test(Correo);
}

function EsNumerico(Telefono)
{
    let expresionTelefono = /^[0-9]+$/i;
    return expresionTelefono.test(Telefono);
}

function sinCaracteresEspeciales(cadena)
{
    //debe permitir letras, numeros, espacios en blanco, acentos, comas y puntos. 
    let expresionCaracteresEspeciales = /^[a-z0-9\sáéíóúñ.,]+$/i;
    return expresionCaracteresEspeciales.test(cadena);
}

function AforoPermitido(numPersonas)
{
    let aforoMaximo = 0;
    sala = document.getElementById('sala').value;
    switch(sala)
    {
        case 'SalaDeEstudiosGeneralSerrano':
            aforoMaximo = 10;
            break;
        case 'SalaDeEstudiosMaríaLeón':
            aforoMaximo = 6;
            break;
        case 'SalaDeMeetingPoint':
            aforoMaximo = 20;
            break;
    }

    return numPersonas > 0 && numPersonas <= aforoMaximo;
}

function HorasSeguidas()
{
    let checkboxes = document.querySelectorAll('.HorasDispDiv input[type="checkbox"]');
    let valorSeleccionadas = []; 
    let horasSeguidas = true;

    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked)
        {
            valorSeleccionadas.push(parseInt(checkboxes[i].value));
        }
    }

    if(valorSeleccionadas.length === 0)
    {
        return false;
    }


    for (var i = 0; i < valorSeleccionadas.length - 1; i++)
    {
        if(valorSeleccionadas[i] + 1 != valorSeleccionadas[i+1])
        {
            horasSeguidas = false;
        }
    }
    return horasSeguidas;
}

function DatosValidos()
{
    let nombre = document.getElementById('nombre').value;
    let Apellido = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let numPersonas = parseInt(document.getElementById('NumPer').value);

    let cadena = "";
    let valido = true;

    if(!EsAlfabetico(nombre))
    {
        cadena += "-> Los nombres solo acepta carácteres alfabéticos.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('nombre').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('nombre').classList.remove('error');
    }

    if(!EsAlfabetico(Apellido))
    {
        cadena += "-> Los apellidos solo acepta carácteres alfabéticos.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('apellidos').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('apellidos').classList.remove('error');
    }


    if(!EsCorreo(correo))
    {
        cadena += "-> El correo no es valido.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('correo').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('correo').classList.remove('error');
    }

    if(!EsNumerico(telefono) || telefono.length != 9)
    {
        cadena += "-> El telefono debe tener 9 numeros.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('telefono').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('telefono').classList.remove('error');
    }

    if(!AforoPermitido(numPersonas))
    {
        cadena += "-> El número de personas no es valido.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('NumPer').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('NumPer').classList.remove('error');
    }

    if(!HorasSeguidas())
    {
        cadena += "-> Se deben reservar las horas seguidamente.\n\tIntroduzca correctamente las horas y vuelva a enviar el formulario.\n\n";
        valido = false;
    }

    if(!valido)
    {
        swal("Error,", cadena, "error");
    }
    return valido;
}

function DatosValidosAyuda()
{
    let nombre = document.getElementById('nombre').value;
    let Apellido = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let problema = document.getElementById('problema').value;

    let cadena = "";
    let valido = true;

    if(!EsAlfabetico(nombre))
    {
        cadena += "-> Los nombres solo acepta carácteres alfabéticos.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('nombre').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('nombre').classList.remove('error');
    }

    if(!EsAlfabetico(Apellido))
    {
        cadena += "-> Los apellidos solo acepta carácteres alfabéticos.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('apellidos').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('apellidos').classList.remove('error');
    }


    if(!EsCorreo(correo))
    {
        cadena += "-> El correo no es valido.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('correo').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('correo').classList.remove('error');
    }

    if(!EsNumerico(telefono) || telefono.length != 9)
    {
        cadena += "-> El telefono debe tener 9 numeros.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('telefono').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('telefono').classList.remove('error');
    }
    if(!sinCaracteresEspeciales(problema))
    {
        cadena += "-> El problema no puede tener carácteres especiales.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n";
        document.getElementById('problema').classList.add('error');
        valido = false;
    }
    else
    {
        document.getElementById('problema').classList.remove('error');
    }

    if(!valido)
    {
        swal("Error,", cadena, "error");
    }

    return valido;
}

