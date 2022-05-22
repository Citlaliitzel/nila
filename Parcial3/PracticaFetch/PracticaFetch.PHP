<?php

$registro['idCliente'] = '00226';
$registro['nomCliente'] = 'Citlali Nila Gutierrez';
$registro['dirCliente'] = 'Josefa Ortiz de Dominguez 3728';
$registro['nomPaciente'] = 'Chokis';
$registro['razaPaciente'] = 'Chihuahua';
$registro['pesoPaciente'] = '5.6 killos';
$registro['tamPaciente'] = 'Chico';
$registro['colPaciente'] = 'Negro con patas blancas';

$registroJson = json_encode($registro);
echo $registroJson;
?>