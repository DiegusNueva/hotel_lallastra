<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $mensaje = $_POST['mensaje'];
  
  // Construir el cuerpo del correo electrónico
  $asunto = 'Nuevo mensaje de contacto';
  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo electrónico: $correo\n";
  $contenido .= "Mensaje: $mensaje\n";
  
  // Enviar el correo electrónico
  $destinatario = 'diegusnueva@gmail.com';
  $cabeceras = "From: $correo\r\n";
  $cabeceras .= "Reply-To: $correo\r\n";
  
  if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
    echo '¡Gracias! Tu mensaje ha sido enviado.';
  } else {
    echo 'Lo sentimos, ha ocurrido un error al enviar el mensaje.';
  }
}
?>
