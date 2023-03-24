function EsAlfabetico(NombreApellido) //Funcion para validar que solo se introduzcan letras, espacios en blanco o tildes
{
    let expresionAlfabetica = /^[a-z\sáéíóúñ]+$/i; //Expresion regular que solo acepta letras, espacios en blanco y tildes
    return expresionAlfabetica.test(NombreApellido); //Devuelve true si la cadena cumple la expresion regular
}

// Similar a EsAlfabetico
function EsCorreo(Correo) 
{ 
    let expresionCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i; //Expresion regular que valida un correo
    return expresionCorreo.test(Correo);
}

// Similar a EsAlfabetico
function EsNumerico(Telefono)
{
    let expresionTelefono = /^[0-9]+$/i; //Expresion regular que valida un numero
    return expresionTelefono.test(Telefono);
}

// Similar a EsAlfabetico
function sinCaracteresEspeciales(cadena) 
{
    
    let expresionCaracteresEspeciales = /^[a-z0-9\sáéíóúñ.,]+$/i; //Expresion regular que valida una cadena sin caracteres especiales
    return expresionCaracteresEspeciales.test(cadena);
}

function AforoPermitido(numPersonas) //Funcion para validar que el aforo no supere el máximo permitido
{
    let aforoMaximo = 0; //Variable que almacenará el aforo máximo de la sala seleccionada
    sala = document.getElementById('sala').value; //Obtenemos el valor de la sala seleccionada
    switch(sala)
    {
        case 'SalaDeEstudiosGeneralSerrano': //Si la sala seleccionada es la de General Serrano
            aforoMaximo = 10;
            break;
        case 'SalaDeEstudiosMaríaLeón': //Si la sala seleccionada es la de María León
            aforoMaximo = 6;
            break;
        case 'SalaDeMeetingPoint': //Si la sala seleccionada es la de MeetingPoint
            aforoMaximo = 20;
            break;
    }

    return numPersonas > 0 && numPersonas <= aforoMaximo; //Devuelve true si el aforo es mayor que 0 y menor o igual que el aforo máximo
}

function HorasSeguidas() //Funcion para validar que las horas seleccionadas sean seguidas
{
    let checkboxes = document.querySelectorAll('.HorasDispDiv input[type="checkbox"]'); //Obtenemos todos los checkbox de las horas disponibles
    let valorSeleccionadas = []; //Array que almacenará los valores de las horas seleccionadas (los valores seran 1 para la primera hora, 2 para la segunda, etc.)
    let horasSeguidas = true; //Variable que almacenará si las horas seleccionadas son seguidas

    for (var i = 0; i < checkboxes.length; i++) //Recorremos todos los checkbox
    {
        if (checkboxes[i].checked) //Si el checkbox esta seleccionado
        {
            valorSeleccionadas.push(parseInt(checkboxes[i].value)); //Añadimos el valor del checkbox al array
        }
    }

    if(valorSeleccionadas.length === 0) //Si no se ha seleccionado ninguna hora
    {
        horasSeguidas = false; //Las horas no son seguidas
    }


    for (var i = 0; i < valorSeleccionadas.length - 1; i++) 
    {
        if(valorSeleccionadas[i] + 1 != valorSeleccionadas[i+1]) //Si el valor actual + 1 no es igual que el siguiente al siguiente (no estan seguidas)
        {
            horasSeguidas = false; //Las horas no son seguidas
        }
    }
    return horasSeguidas; 
}


function DatosValidos() //Funcion para validar los datos introducidos en el formulario
{
    let nombre = document.getElementById('nombre').value; //Obtenemos el valor del campo nombre
    let Apellido = document.getElementById('apellidos').value; //Obtenemos el valor del campo apellidos
    let correo = document.getElementById('correo').value;  //Obtenemos el valor del campo correo
    let telefono = document.getElementById('telefono').value; //Obtenemos el valor del campo telefono
    let numPersonas = parseInt(document.getElementById('NumPer').value); //Obtenemos el valor del campo numero de personas

    let cadena = ""; //Variable que almacenará el mensaje de error
    let valido = true; //Variable que almacenará si los datos son validos

    if(!EsAlfabetico(nombre)) //Si el nombre no es valido
    {
        cadena += "-> Los nombres solo acepta carácteres alfabéticos.\n\tIntroduzcalo correctamente y vuelva a enviar el formulario.\n\n"; //Añadimos el mensaje de error al mensaje de error
        document.getElementById('nombre').classList.add('error'); //Añadimos la clase error al campo nombre
        valido = false; //Los datos no son validos
    }
    else //Si el nombre es valido
    { 
        document.getElementById('nombre').classList.remove('error'); //Eliminamos la clase error del campo nombre
    }

    // Similar a lo anterior
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

    // Similar a lo anterior
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

    // Similar a lo anterior añadiendo la longitud del telefono
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

    // Similar a lo anterior
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

    // Similar a lo anterior
    if(!HorasSeguidas())
    {
        cadena += "-> Se deben reservar las horas seguidamente.\n\tIntroduzca correctamente las horas y vuelva a enviar el formulario.\n\n";
        valido = false;
    }

    if(!valido) //Si los datos no son validos
    {
        swal("Error,", cadena, "error"); //Mostramos un mensaje en el DOM con el mensaje de error
    }
    return valido;
}

//Funcion similar a la anterior pero para la pagina de contacto
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