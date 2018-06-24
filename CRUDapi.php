<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$servername = "localhost";
$username="root";
$password="jorge";
$database="vitogame";

$option=$_REQUEST['option'];

try{
    $conn= new PDO("mysql:host=$servername;dbname=$database",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    echo $sql . "<br>". $e->getMessage();
}

switch($option){
    case "getNumberGame":
        //echo "getNumberGa";
        $sql="select distinct(juego)+1 juegoactual,count(distinct(juego)) cantidadJuegos from game order by juego desc limit 1;";
        $stmt = $conn->query($sql);
        $data = $stmt->fetch();
        $json["juegoactual"] = $data["juegoactual"];
        $json["cantidadJuegos"] = $data["cantidadJuegos"];
        echo (json_encode($json));
        $conn=null;
        break;
}
?>