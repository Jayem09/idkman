<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php"); // Redirect to login page if not authenticated
    exit(); // Stop further execution
}

// If the user is logged in, you can fetch user data from the database and display it
// Example: Fetch user data
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "user_auth"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_SESSION['username'];
$sql = "SELECT * FROM users WHERE username='$user'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Display user information
    echo "<h2>Welcome, " . htmlspecialchars($row['username']) . "</h2>";
    // Other user details can be displayed here
} else {
    echo "User  not found.";
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>User Profile</title>
</head>
<body>
    <h2>Your Profile</h2>
    <!-- Additional profile information can be displayed here -->
    <a href="logout.php">Logout</a>
</body>
</html>