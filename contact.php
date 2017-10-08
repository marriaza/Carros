<?php
    function validate(){
        if(empty($_POST['name'])        ||
           empty($_POST['email'])       ||
           empty($_POST['phone'])       ||
           empty($_POST['message']) ||
           !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
           {
            echo "No arguments Provided!";
            return false;
           }else{
            return true;
           }
    }

    function send(){
        $name = $_POST['name'];
        $email_address = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        // Create the email and send the message
        $to = 'info@yourdomain.com';
        $email_subject = "Website Contact Form:  $name";
        $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nCompany: $company\n\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: noreply@domain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
        $headers .= "Reply-To: $email_address"; 
        mail($to,$email_subject,$email_body,$headers);
        return true;
    }
    if(isset($_POST['send'])){
        send();
    }        
?>

<form name="MyContactForm" onsubmit="return validate()" method="post" id="MyContactForm" novalidate>