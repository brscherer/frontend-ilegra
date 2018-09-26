const text = document.getElementById('text');

const re = /(dota)/;

document.getElementById('btn').addEventListener('click', () => alert(re.test(text.value)));

