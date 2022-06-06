<?php

$idCliente=$_POST['id']; /*Verifica bien el nombre de la variable que le mandas antes tenuas idCliente */

$hostname='localhost';
$database='n19100226';
$username='root';
$password='';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}
try {
    $consultaSql = "select nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente from cliente where id=".$idCliente;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);

    $consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($resultado);

?>

