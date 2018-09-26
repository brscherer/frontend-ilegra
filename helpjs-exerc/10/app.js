const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => result.value = parseInt(op1.value) + parseInt(op2.value));