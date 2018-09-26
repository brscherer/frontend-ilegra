const off = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
const on = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
const lamp = document.getElementById('lamp');

lamp.addEventListener('mouseover', () => lamp.src = on);
lamp.addEventListener('mouseout', () => lamp.src = off);
