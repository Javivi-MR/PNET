document.addEventListener("DOMContentLoaded", function() {
    let AlmacenarRes = document.getElementById("enviar");
    AlmacenarRes.addEventListener("click", function() {
        let Reserva = {};

        Reserva.Nombre = document.getElementById("nombre").value;;
        
        Reserva.Apellidos = document.getElementById("apellidos").value;

        Reserva.Correo = document.getElementById("correo").value;

        Reserva.Telefono = document.getElementById("telefono").value;
    
        Reserva.Fecha = document.getElementById("fecha").value;

        Reserva.NumPersonas = document.getElementById("NumPer").value;

        switch(document.getElementById("sala").value)
        {
            case "SalaDeEstudiosGeneralSerrano" :
                Reserva.Sala = "General Serrano";
                break;
            case "SalaDeEstudiosMaríaLeón":
                Reserva.Sala = "María León";
                break;
            case "SalaDeMeetingPoint":
                Reserva.Sala = "Meeting Point";
                break;
        }

        let checks = document.querySelectorAll('.HorasDispDiv input[type="checkbox"]');
        let horas = [];
        console.log(checks);
        for(let i = 0; i < checks.length; i++)
        {
            switch(checks[i].value)
            {
                case "1":
                    horas.push("10:00h - 11:00h");
                    break;
                case "2":
                    horas.push("11:00h - 12:00h");
                    break;
                case "3":
                    horas.push("12:00h - 13:00h");
                    break;
                case "4":
                    horas.push("13:00h - 14:00h");
                    break;
                case "5":
                    horas.push("14:00h - 15:00h");
                    break;
            }
        }
        if(horas.length != 0)
        {
            Reserva.Horas = horas;
        }
        postReservas(Reserva);
    });
});

function postReservas(Reserva) {
    var myUrl = "http://localhost:8080/salasReserva";
    $.ajax({
        type: "POST",
        url: myUrl,
        data: JSON.stringify(Reserva),
        contentType: "application/json",
        dataType : "text",
        success: function(data) {
            let rawdata = JSON.parse(data);
            console.log(rawdata.msg);
            $("#Resultado").html("Se ha registrado su reserva correctamente");
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}