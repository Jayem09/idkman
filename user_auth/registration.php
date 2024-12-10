<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "usee_auth");

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $username = $_POST["username"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm_password"];

  // Check if the passwords match
  if ($password != $confirm_password) {
    echo "Passwords do not match";
  } else {
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Insert the user into the database
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
    if (mysqli_query($conn, $sql)) {
      echo "User created successfully";
    } else {
      echo "Error creating user";
    }
  }
}

// Close the database connection
mysqli_close($conn);
?>

