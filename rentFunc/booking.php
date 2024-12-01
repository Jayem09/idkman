<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($argv)) {
    $name = $argv[1];
    $start_date = $argv[2];
    $end_date = $argv[3];
    $address = $argv[4];
} else {
    $name = $_POST['name'];
    $start_date = $_POST['startDate'];
    $end_date = $_POST['endDate'];
    $address = $_POST['address'];
}

// Check if all required fields are provided
if (empty($name) || empty($start_date) || empty($end_date) || empty($address)) {
    die('Error: All fields are required.');
}

// Validate the start and end dates
if (!strtotime($start_date) || !strtotime($end_date)) {
    die('Error: Invalid start or end date.');
}

// Validate the address
if (!preg_match('/^[a-zA-Z0-9\s.,#\-\/]+$/', $address)) {
    die('Error: Invalid address format.');
}

// Connection to the database
$conn = new mysqli('localhost', 'root', '', 'booking_system');

// Check connection
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

try {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO bookings (name, start_date, end_date, address) VALUES (?, ?, ?, ?)");

    // Check if the statement was prepared successfully
    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssss", $name, $start_date, $end_date, $address);
        
        // Execute the statement
        if ($stmt->execute()) {
            echo "<h2>Booking Successful!</h2>";
            echo "<p>Your booking details are:</p>";
            echo "<table border='1'>";
            echo "<tr><th>Field</th><th>Value</th></tr>";
            echo "<tr><td>Name</td><td>$name</td></tr>";
            echo "<tr><td>Start Date</td><td>$start_date</td></tr>";
            echo "<tr><td>End Date</td><td>$end_date</td></tr>";
            echo "<tr><td>Address</td><td>$address</td></tr>";
            echo "</table>";
            echo "<script>Swal.fire({ icon: 'success', title: 'Booking successful!', text: 'Your booking has been successfully made.', timer: 2000 });</script>";
        } else {
            echo "<h2>Booking Failed!</h2>";
            echo "<p>Please try again.</p>";
            echo "<script>Swal.fire({ icon: 'error', title: 'Booking failed!', text: 'Your booking has failed. Please try again.', timer: 2000 });</script>";
        }

        // Close the statement
        $stmt->close();
    } else {
        throw new Exception("Failed to prepare the SQL statement.");
    }

    // Close the connection
    $conn->close();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>