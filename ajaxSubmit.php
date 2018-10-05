<?php
    //asignando el valor de los campos del formulario a variables
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    //formando el header
    $header = "From: " .$email."\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() ."\r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain;charset=utf-8"; /* agregué el charset para que pueda desplegar las letras con tildes y otros caracteres especiales como se debe. Fuente: https://stackoverflow.com/questions/2265579/php-e-mail-encoding */

    //formando el cuerpo del mail
    $comentario = "Este mensaje fue enviado por: ".$nombre."\r\n";
    $comentario .= "Su e-mail es: ".$email."\r\n";
    $comentario .= "Su mensaje es: ".$mensaje."\r\n";

    //destinatario del mensaje
    $para = "exoteria@hotmail.com";

    //subject line
    $asunto = "Contacto desde página web"; //no se despliega bien la palabra "página"

    //envía el mail
    //NO se puede enviar mails desde localhost
    mail($para, $asunto, $comentario, $header); //le quite el utf8_encode() porque ya lo hace en el header al declarar el charset


    //para que esto funcione debe ejecutarse desde el localhost y no file://
    $nombre = $_POST['nombre'];
    echo json_encode(array(
      'Mensaje' => sprintf("Se recibió el mail de %s", $nombre)
    ));
?>
