const number = document.getElementById('number');

const discount = (a) => a * (5/100);

document.getElementById('btn').addEventListener('click', () => alert('Discount: ' + discount(number.value)));

