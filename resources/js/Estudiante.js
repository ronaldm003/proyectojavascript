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

$(document).ready(function () {
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

function guardarDB(estudiante) {
my
}