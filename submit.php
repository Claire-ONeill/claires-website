<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $formattedData = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    $file = 'form_submissions.txt';
    file_put_contents($file, $formattedData, FILE_APPEND | LOCK_EX);

    // Redirect to a thank-you page or display a success message
    header('Location: thank_you.html');
    exit();
} else {
    // Redirect if the form is accessed directly without submitting
    header('Location: index.html');
    exit();
}
?>
