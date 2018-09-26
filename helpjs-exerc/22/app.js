const number = document.getElementById('number');
const currentYear = (new Date()).getFullYear();

document.getElementById('btn').addEventListener('click', () => currentYear - number.value >= 18 ? alert('Of age') : alert('Under age'));

