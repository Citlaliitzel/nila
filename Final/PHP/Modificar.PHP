<?php

$idCliente=$_POST['idCliente'];
$nomCliente=$_POST['nomCliente'];
$dirCliente=$_POST['dirCliente'];
$nomPaciente=$_POST['nomPaciente'];
$razaPaciente=$_POST['razaPaciente'];
$pesoPaciente=$_POST['pesoPaciente'];
$tamPaciente=$_POST['tamPaciente'];
$colPaciente=$_POST['colPaciente'];


$hostname='localhost';
$database='n19100226';
$username='root';
$password='Nila226';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

try{
    $consultaSql = "update cliente set NombreCliente = '$nomCliente', DireccionCliente = '$dirCliente', NombrePaciente = '$nomPaciente', RazaPaciente = '$razaPaciente', PesoPaciente = '$pesoPaciente', TamañoPaciente = '$tamPaciente', ColorPaciente = '$colPaciente' where idCliente = $idCliente";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

?>