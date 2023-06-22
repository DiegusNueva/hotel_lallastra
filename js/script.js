// Control del deslizamiento de imágenes
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var mensaje = document.getElementById('mensaje').value;

  var data = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje
  };

  // Enviar el formulario utilizando AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'enviar_formulario.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('¡Gracias! Tu mensaje ha sido enviado.');
      } else {
        console.error('Lo sentimos, ha ocurrido un error al enviar el mensaje.');
      }
    }
  };

  xhr.send(JSON.stringify(data));
});