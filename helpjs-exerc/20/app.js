const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => result.value = mult(op1.value, op2.value));

const mult = (a, b) =>  parseInt(a) * parseInt(b);
