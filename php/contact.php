<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "angelnalubowa97@gmail.com";
    $subject = "BALLERS AFRICA";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank_you.php"); // Replace with your desired page
        exit();
    } else {
        echo "Failed to send message.";
    }
    
}
?>
