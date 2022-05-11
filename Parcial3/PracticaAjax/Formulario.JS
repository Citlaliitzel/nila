$(document).ready(function() {
    $('#botonAlerta').click(function() {
        //$('#ventanaAlerta').toggleClass('collapse')
        $('#ventanaAlerta').show();
    });

    $('#botonCerrarAlerta').click(function() {
        //$('#ventanaAlerta').toggleClass('collapse')
        $('#ventanaAlerta').hide();
    });

    $('#botonModalJS').click(function() {
        $('.modal-body').text("Se disparo desde el boton Js")
        $('#ventanaModal').modal();
    });

    $('#botonModalSweet').click(function() {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    });

    function pedirHeader() {
        var solicitud = new XMLHttpRequest();

        solicitud.onreadystatechange = function() {

            if (solicitud.readyState == 4 && solicitud.status == 200) {
                document.getElementById("MyDiv").innerHTML = solicitud.responseText;
            }};

            solicitud.open("GET", "01_cargarArchivo.txt", true);
            solicitud.send();
            }
            function iniciarHeader() {
                document.getElementById("MyDiv").innerHTML = "<h2>Este es un Header nivel 2<h2>";
            }
    });