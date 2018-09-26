const number = document.getElementById('number');

const evenOdd = (a) => a % 2 == 0 ? 'Even' : 'Odd';

document.getElementById('btn').addEventListener('click', () => alert(evenOdd(number.value)));

