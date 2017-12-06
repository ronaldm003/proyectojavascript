let id;
let nombre;
let matricula;
let identificacion;
let telefono;
let email;

let Estudiante = function () {
    let self = this;
    self.id = "";
    self.nombre = "";
    self.matricula = "";
    self.identificacion = "";
    self.telefono = "";
    self.email = "";
};

function agregarEstudiante(estudiante) {
    let rowEstudiante = "<tr><td>" + "<div><label><input type=\"checkbox\" value=\"\"></div> " +
        "</td><td>" + estudiante.id + "</td><td>" + estudiante.nombre + "</td><td>" + estudiante.matricula + "</td><td>" +
        estudiante.identificacion + "</td><td>" + estudiante.telefono + "</td><td>" + estudiante.email + "</td></tr>";
    $("table tbody").append(rowEstudiante);
}

function removerEstudiante() {
    myStorage = window.localStorage;

    // let toBeRemoved = $("input[type=checkbox]:checked").closest("tr");
    // var dbEstudiantes = myStorage.getItem("estudiantes");
    // if (dbEstudiantes != null) {
    //     var estudiantes = JSON.parse(dbEstudiantes);
    //     $.each(estudiantes, function (i, estudiante) {
    //         toBeRemoved.each(function (index) {
    //             console.log(index + ": " + $(this));
    //             console.log(estudiante);
    //         });
    //     });
    // }

    var checkboxValues = $('input[type="checkbox"][name="checkboxgroup"]:checked').map(function () {

        return $(this).val();
    }).toArray();

    for (let klk of checkboxValues) {
        console.log(checkboxValues)
    }
    // myStorage.getItem(this);
    // myStorage.removeItem(estudiante);
    // console.log(JSON.stringify(toBeRemoved));
    toBeRemoved.remove();
}

function guardarDB(estudiante) {

    myStorage = window.localStorage;

    let estudiantes = [];
    let dbEstudiantes = myStorage.getItem("estudiantes");
    if (dbEstudiantes != null) {
        estudiantes = JSON.parse(dbEstudiantes);
    }
    estudiantes.push(estudiante);
    myStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

$(document).ready(function () {
    myStorage = window.localStorage;

    var dbEstudiantes = myStorage.getItem("estudiantes");
    if (dbEstudiantes != null) {
        var estudiantes = JSON.parse(dbEstudiantes);
        $.each(estudiantes, function (i, estudiante) {
            agregarEstudiante(estudiante);
        });
    }

    $("#addEst").click(function () {
        id = $("#code").val();
        nombre = $("#nombre").val();
        matricula = $("#matricula").val();
        identificacion = $("#identificacion").val();
        telefono = $("#telefono").val();
        email = $("#email").val();

        let estudiante = new Estudiante();
        estudiante.id = id;
        estudiante.nombre = nombre;
        estudiante.matricula = matricula;
        estudiante.identificacion = identificacion;
        estudiante.telefono = telefono;
        estudiante.email = email;

        guardarDB(estudiante);
        agregarEstudiante(estudiante);
    });

    $("#removeEst").click(function () {
        removerEstudiante();
    });

});
