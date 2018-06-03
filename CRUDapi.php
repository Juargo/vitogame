<?php

echo "hola";

$servername = "localhost";
$username="root";
$password="jorge";
$database="vitogame";
var_export($_POST);
$game=$_REQUEST['game'];
$mano=$_REQUEST['mano'];
$jugador=$_REQUEST['jugador'];
$jugada=$_REQUEST['jugada'];
$resultado=$_REQUEST['resultado'];

try{
    $conn= new PDO("mysql:host=$servername;dbname=$database",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "insert into game (juego,mano,jugador,jugada,resultado)value($game,$mano,'$jugador',$jugada,$resultado)";
    $conn->exec($sql);
    echo "NEW record";
}
catch(PDOException $e){
    echo $sql . "<br>". $e->getMessage();
}

$conn =null;
?>