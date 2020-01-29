<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-type: application/json');

    include_once './database.php';
    $db = new Database();
    $conn = $db->getConnection();

    if($conn){
       // echo "Connection established";
    } else {
        echo "Connection Error";
    }

    $sql = "SELECT * FROM employee";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $data = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $employee = array(
            'id' => $id,
            'eid' => $eid,
            'name' => $name
        ); 
        array_push($data, $employee);
    }
    
    echo json_encode($data);
?>