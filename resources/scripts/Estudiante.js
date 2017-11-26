var id;
var nombre;
var matricula;
var identification;
var telefono;
var email;

var Estudiante = function () {
    var self = this;
    self.id = "";
    self.nombre = "";
    self.matricula = "";
    self.identificacion = "";
    self.telefono = "";
    self.email = "";
};


function save() {
    id = document.getElementById("code").value;
    nombre = document.getElementById("nombre").value;
    matricula = document.getElementById("matricula").value;
    identification = document.getElementById("identificacion").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;

    console.log(id);
    console.log(nombre);
    console.log(matricula);
    console.log(identification);
    console.log(telefono);
    console.log(email);
}


function saveEst() {
    var est1 = new Estudiante();
    est1.id = document.getElementById("code").value;
    est1.nombre = document.getElementById("nombre").value;
    est1.matricula = document.getElementById("matricula").value;
    est1.identificacion = document.getElementById("identificacion").value;
    est1.telefono = document.getElementById("telefono").value;
    est1.email = document.getElementById("email").value;
    console.log(est1);
    addRow(est1);
}

function addRow(est1) {
    var tableEstudiante = document.getElementById("estudiantes");
    var tr = document.createElement("tr");
    var tdId = document.createElement("td");
    var tdNombre = document.createElement("td");
    var tdMatricula = document.createElement("td");
    var tdIdentificacion = document.createElement("td");
    var tdTelefono = document.createElement("td");
    var tdEmail = document.createElement("td");

    var txtId = document.createTextNode(est1.id);
    var txtNombre = document.createTextNode(est1.nombre);
    var txtMatricula = document.createTextNode(est1.matricula);
    var txtIdentificacion = document.createTextNode(est1.identificacion);
    var txtTelefono = document.createTextNode(est1.telefono);
    var txtEmail = document.createTextNode(est1.email);

    tdId.appendChild(txtId);
    tdNombre.appendChild(txtNombre);
    tdMatricula.appendChild(txtMatricula);
    tdIdentificacion.appendChild(txtIdentificacion);
    tdTelefono.appendChild(txtTelefono);
    tdEmail.appendChild(txtEmail);

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdIdentificacion);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdEmail);

    tableEstudiante.appendChild(tr);
}
