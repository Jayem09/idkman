<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = isset($_POST['name']) ? $_POST['name'] : '';
$start_date = isset($_POST['startDate']) ? $_POST['startDate'] : '';
$end_date = isset($_POST['endDate']) ? $_POST['endDate'] : '';
$address = isset($_POST['address']) ? $_POST['address'] : '';

// Check if all required fields are provided
if (empty($name) || empty($start_date) || empty($end_date) || empty($address)) {
    die('Error: All fields are required.');
}

// Connection to the database
$conn = new mysqli('localhost', 'root', '3d@rsales', 'booking_system');

// Check connection
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO bookings (name, start_date, end_date, address) VALUES (?, ?, ?, ?)");

    // Check if the statement was prepared successfully
    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssss", $name, $start_date, $end_date, $address);
        
        // Execute the statement
        if ($stmt->execute()) {
            echo "Booking successful!";
        } else {
            echo "Booking failed: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Failed to prepare the SQL statement.";
    }

    // Close the connection
    $conn->close();
}
?>