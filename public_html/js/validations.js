// Ver todas las reservas
document.addEventListener("DOMContentLoaded", function() {
    let VerTodasRes = document.getElementById("VerTodasRes");
    VerTodasRes.addEventListener("click", function() {
        getAllReservas();
    });
});

function getAllReservas() {
    var myUrl = "http://localhost:8080/salasReserva";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	    	$("#Resultado").html(JSON.stringify(data));
        },
        error: function(res) {
            alert("ERROR " + res.statusText);
        }
    });
}

// Eliminar todas las reservas

document.addEventListener("DOMContentLoaded", function() {
    let EliminarTodasRes = document.getElementById("EliminarTodasRes");
    EliminarTodasRes.addEventListener("click", function() {
        deleteAllReservas();
    });
});

function deleteAllReservas() {
    let myUrl = "http://localhost:8080/salasReserva";
    $.ajax({
        type: "DELETE",
        url: myUrl,
        contentType: "application/json",
        dataType : "text",
        success: function(data) {
            $("#Resultado").html(data);
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}

// Ver una reserva especifica
document.addEventListener("DOMContentLoaded", function() {
    let VerTodasRes = document.getElementById("VerRes");
    VerTodasRes.addEventListener("click", function() {
        let ReservaId = document.getElementById("ReservaId").value;
        getReservas(ReservaId);
    });
});

function getReservas(ReservaId) {
    let myUrl = "http://localhost:8080/salasReserva/" + ReservaId;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	    $("#Resultado").html(JSON.stringify(data[0]));
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

// Eliminar una reserva especifica

document.addEventListener("DOMContentLoaded", function() {
    let EliminarRes = document.getElementById("EliminarRes");
    EliminarRes.addEventListener("click", function() {
        let ReservaId = document.getElementById("ReservaIdEliminar").value;
        deleteReservas(ReservaId);
    });
});

function deleteReservas(ReservaId) {
    var myUrl = "http://localhost:8080/salasReserva/" + ReservaId;
    $.ajax({
        type: "DELETE",
        url: myUrl,
        contentType: "application/json",
        dataType : "text",
        success: function(data) {
            let rawdata = JSON.parse(data);
            console.log(rawdata.msg);
            $("#Resultado").html(rawdata.msg);
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}

// Actualizar una reserva especifica

document.addEventListener("DOMContentLoaded", function() {
    let ActualizarRes = document.getElementById("ActualizarRes");
    ActualizarRes.addEventListener("click", function() {
        let Reserva = {};
        let ReservaId = document.getElementById("ReservaIdActualizar").value;
        let nombre = document.getElementById("ReservaNombreModificar").value;
        if(nombre != "")
        {
            Reserva.Nombre = nombre;
        }
        let apellidos = document.getElementById("ReservaApellidosModificar").value;
        if(apellidos != "")
        {
            Reserva.Apellidos = apellidos;
        }
        let email = document.getElementById("ReservaEmailModificar").value;
        if(email != "")
        {
            Reserva.Correo = email;
        }
        let telefono = document.getElementById("ReservaTelefonoModificar").value;
        if(telefono != "")
        {
            Reserva.Telefono = telefono;
        }
        let fecha = document.getElementById("fecha").value;
        if(fecha != "")
        {
            Reserva.Fecha = fecha;
        }
        let NumPersonas = document.getElementById("ReservaNumPersonasModificar").value;
        if(NumPersonas != "")
        {
            Reserva.NumPersonas = NumPersonas;
        }
        let sala = document.getElementById("ReservaSalaModificar").value;
        switch(sala)
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
        let checks = document.querySelectorAll('input[name=checkboxes]:checked');
        let horas = [];
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
        updateReservas(ReservaId, Reserva);
    });
});

function updateReservas(ReservaId, Reserva) {
    var myUrl = "http://localhost:8080/salasReserva/" + ReservaId;
    $.ajax({
        type: "PUT",
        url: myUrl,
        data: JSON.stringify(Reserva),
        contentType: "application/json",
        dataType : "text",
        success: function(data) {
            let rawdata = JSON.parse(data);
            console.log(rawdata.msg);
            $("#Resultado").html(rawdata.msg);
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}