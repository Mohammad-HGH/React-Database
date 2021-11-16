<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fateme_db";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // prepare sql and bind parameters
    // insert a row
    if (!empty($_GET["subscribe"])) {
        $firstName =  filter_input(INPUT_GET, "firstname", FILTER_SANITIZE_STRING);
        $lastName  =  filter_input(INPUT_GET, "lastname", FILTER_SANITIZE_STRING);
        $userEmail =  filter_input(INPUT_GET, "email", FILTER_SANITIZE_EMAIL);
        $message   =  filter_input(INPUT_GET, "subject", FILTER_SANITIZE_STRING);
        if (!empty($firstName) && !empty($userEmail) && !empty($lastName) && !empty($message)) {
            $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email,message) VALUES (?, ?, ?, ?)");
            $stmt->bindParam(1, $firstName, PDO::PARAM_STR);
            $stmt->bindParam(2, $lastName, PDO::PARAM_STR);
            $stmt->bindParam(3, $userEmail, PDO::PARAM_STR);
            $stmt->bindParam(4, $message, PDO::PARAM_STR);
            $stmt->execute();
            echo "New record created successfully";

        } else {
            $message = "All fields are required";
        }
        echo $message;
    }

} catch (PDOException $e) {
    echo $e->getMessage();
}
$conn = null;
?>