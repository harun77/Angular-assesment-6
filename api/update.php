<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: PUT');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-type: application/json');

    include_once './database.php';
    $db = new Database();
    $conn = $db->getConnection();

    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;
    $eid = $data->eid;
    $name = $data->name;
    
    $sql = "UPDATE employee SET eid = ?, name = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if($stmt->execute(array($eid, $name, $id))){
        echo json_encode(array('status'=>true));
        return;
    };
    echo json_encode(array('status'=>false));
?>