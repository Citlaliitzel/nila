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
});