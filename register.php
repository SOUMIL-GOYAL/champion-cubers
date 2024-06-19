<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer-master/PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';

    $mail = new PHPMailer();
    $mail->IsSMTP();

    $mail->SMTPDebug  = 0;
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port       = 587;
    $mail->Host       = "smtp.gmail.com";
    $mail->Username   = "championcubers@gmail.com";
    $mail->Password   = "jdzazkjmxaxznkfr";

    $mail->IsHTML(true);
    $mail->AddAddress("championcubers@gmail.com", "SOUMIL GOYAL");
    $mail->SetFrom("championcubers@gmail.com", "SOUMIL GOYAL");
    $mail->AddReplyTo("championcubers@gmail.com", "SOUMIL GOYAL");
    //$mail->AddCC("soumil.goyal@yahoo.com.sg", "Soumil Goyal");
    $mail->Subject = $_POST['submit'];

    if (isset($_POST['submit'])) {

    $studentsname = $_POST["studentname"];
    $studentsage = $_POST["studentage"];
    $parentsname = $_POST["parentname"];
    $parentsmail = $_POST["parentemail"];
    $parentsnumber = $_POST["parentnumber"];
    $cubechoice = $_POST["cchoice"];
    $numberofcubes = $_POST["cubes"];
    $additionalinfo = $_POST["ques"];

    

    $finalmessage = "";

    $allanswers = array("Student's name" => $studentsname,
     "Student's age" => $studentsage,
      "Parent's name" => $parentsname,
       "Parent's email" => $parentsmail,
        "Parent's number" => $parentsnumber,
         "Cube choice" => $cubechoice,
          "Number of cubes" => $numberofcubes,
            "Additional information" => $additionalinfo,);

    foreach ($allanswers as $x => $value) {
        $finalmessage = $finalmessage . "$x is:: $value<br>";
    }    

    //echo "$finalmessage";

    $content = "$finalmessage";

    $mail->MsgHTML($content); 
    if(!$mail->Send()) {
        echo "Error while sending Email.";
        header("location: register.html?registerstatus=fail");
        var_dump($mail);
    } else {
        echo "Registration Successful!";
        header("location: register.html?registerstatus=pass");
    }
    
}


?>