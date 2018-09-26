const number = document.getElementById('number');
let random = Math.floor(Math.random() * 10);

document.getElementById('btn').addEventListener('click', () => number.value == random ? alert('Right!') : alert('Wrong!'));
