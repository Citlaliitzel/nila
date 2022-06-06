<?php

$idCliente=$_POST['idCliente'];

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
    $consultaSql = "delete from cliente where id = $idCliente";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

?>