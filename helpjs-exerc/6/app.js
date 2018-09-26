const off = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
const on = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
const lamp = document.getElementById('lamp');

lamp.addEventListener('click', () => lamp.src == off ? lamp.src = on : lamp.src = off);
