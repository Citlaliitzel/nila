$(document).ready(function() {
    $('#botonAlerta').click(function() {
        //$('#ventanaAlerta').toggleClass('collapse')
        $('#ventanaAlerta').show();
    });

    $('#botonCerrarAlerta').click(function() {
        //$('#ventanaAlerta').toggleClass('collapse')
        $('#ventanaAlerta').hide();
    });

    $('#botonModalJs').click(function() {
        // $('.modal-body').text("Se disparo desde el boton Js");
        $('#ventanaModal').modal();
    });

    $('#botonModalSweet').click(function() {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    });

    $('#botonAjax').click(function() {
        var solicitud = new XMLHttpRequest();
            
            solicitud.onreadystatechange = function() {
            
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    document.getElementById("header").innerHTML = solicitud.responseText;
            }};
            
            solicitud.open("GET", "Formulario.txt", true);
            solicitud.send();
    });

    $('#botonJson').click(function(){
        $.post('ScriptConsulta.php',{},function(data){

            console.log(data);
            $('#idCliente').val(data.idCliente);
            $('#nomCliente').val(data.nomCliente);
            $('#dirCliente').val(data.dirCliente);
            $('#nomPaciente').val(data.nomPaciente);
            $('#razaPaciente').val(data.razaPaciente);
            $('#pesoPaciente').val(data.pesoPaciente);
            $('#tamPaciente').val(data.tamPaciente);
            $('#colPaciente').val(data.colPaciente);
        },'Json');
    });

    $('#botonPromesa').click(function() {
        new Promise(function(resolve,reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if(solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
            }};
            solicitud.open("GET", "getHeader.txt", true);
            solicitud.send();

        }).then(value => document.getElementById("header").innerHTML = value );
    });

    $('#botonFetch').click(function() {
        fetch('PracticaFetch.php')
            .then(respuesta => respuesta.json())
                .then(function(dato) {refrescar(dato)});
    });

    function refrescar(objeto) {
        $('#idCliente').val(data.idCliente);
        $('#nomCliente').val(data.nomCliente);
        $('#dirCliente').val(data.dirCliente);
        $('#nomPaciente').val(data.nomPaciente);
        $('#razaPaciente').val(data.razaPaciente);
        $('#pesoPaciente').val(data.pesoPaciente);
        $('#tamPaciente').val(data.tamPaciente);
        $('#colPaciente').val(data.colPaciente);
    }
});