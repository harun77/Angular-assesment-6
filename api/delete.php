<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-type: application/json');

    include_once './database.php';
    $db = new Database();
    $conn = $db->getConnection();
    
    $id = $_REQUEST['id'];
    
    $sql = "DELETE FROM employee WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if($stmt->execute(array($id))){
        echo json_encode(array('status'=>true));
        return;
    };
    echo json_encode(array('status'=>false));
?>