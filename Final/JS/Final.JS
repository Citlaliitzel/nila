$(document).ready(function() {
    $('#botonConsultar').click(function() {
        $('#M1').modal({backdrop: 'static', keyboard: false});
    });

    $('#botonConsultar2').click(function() {
        let ID = $('#idCliente').val();
        $.post('/PHP/Consultar.php',{id:ID},function(data){
            refrescar(data);
        },'json');
        $('#M1').modal('hide');
    });

    $('#botonRegistrar').click(function() {
        let idCliente = $('#idCliente').val();
        let nomCliente = $('#nomCliente').val();
        let dirCliente = $('#dirCliente').val();
        let nomPaciente = $('#nomPaciente').val();
        let razaPaciente = $('#razaPaciente').val();
        let pesoPaciente = $('#pesoPaciente').val();
        let tamPaciente = $('#tamPaciente').val();
        let colPaciente = $('#colPaciente').val();
        swal({
            title: "¿Registrar?",
            text: "¿Desea registrarlo?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                $.post('./PHP/Registrar.php',{idCliente, nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente});
                swal("Se ha registrado", {
                icon: "success"
                });
                Formulario.reset();
            } else {
                swal("No se ha registrado");
            }
        });
    });
    
    $('#botonModificar').click(function() {
        let idCliente = $('#idCliente').val();
        let nomCliente = $('#nomCliente').val();
        let dirCliente = $('#dirCliente').val();
        let nomPaciente = $('#nomPaciente').val();
        let razaPaciente = $('#razaPaciente').val();
        let pesoPaciente = $('#pesoPaciente').val();
        let tamPaciente = $('#tamPaciente').val();
        let colPaciente = $('#colPaciente').val();
        swal({
            title: "¿Modificar?",
            text: "¿Desea modificarlo?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                $.post('./PHP/Modificar.php',{idCliente, nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente:idCliente});
                swal("Se ha modificado", {
                icon: "success"
                });
            } else {
                swal("No se ha modificado");
            }
        });
    });

    $('#botonEliminar').click(function() {
        let ID = $('#idDes').val();
        swal({
            title: "¿Eliminar?",
            text: "¿Desea eliminarlo?,",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                $.post('./Php/Eliminar.php',{id:idCliente});
                swal("La información se elimino", {
                icon: "success"
                });
                Final.reset();
            } else {
                swal("No se ha eliminado");
            }
        });
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