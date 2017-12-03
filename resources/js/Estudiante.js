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
    let rowEstudiante = "<tr><td>" + estudiante.id + "</td><td>" + estudiante.nombre + "</td><td>" + estudiante.matricula + "</td><td>" +
        estudiante.identificacion + "</td><td>" + estudiante.telefono + "</td><td>" + estudiante.email + "</td></tr>";
    $("table tbody").append(rowEstudiante);
}

function guardarDB(estudiante) {

    myStorage = window.localStorage;

    let estudiantes = [];
    let dbEstudiantes = myStorage.getItem("estudiantes");
    if (dbEstudiantes != null) {
        estudiante = JSON.parse(dbEstudiantes);
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

        agregarEstudiante(estudiante);
        guardarDB(estudiante);
    })
});
