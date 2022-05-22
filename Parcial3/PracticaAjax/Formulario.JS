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

    $('#botonAjax').click(function() {
        var solicitud = new XMLHttpRequest();
            
            solicitud.onreadystatechange = function() {
            
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    document.getElementById("header").innerHTML = solicitud.responseText;
            }};
            
            solicitud.open("GET", "Formulario.txt", true);
            solicitud.send();
        });
    });