let gods = ['Aegir', 'Aud', 'Balder'];

document.getElementById('a').addEventListener('click', () => {
    alert('Gods array length: ' + gods.length);
});

document.getElementById('b').addEventListener('click', () => {
    gods.forEach(god => alert(god));
});

document.getElementById('c').addEventListener('click', () => {
    gods.map(god => alert(god));
});

document.getElementById('d').addEventListener('click', () => {
    gods.push('Loki');
    gods.push('Odin');
    gods.push('Frey');
    gods.forEach(god => alert(god));
});

document.getElementById('e').addEventListener('click', () => {
    gods[gods.length] = 'Loki';
    gods[gods.length] = 'Odin';
    gods[gods.length] = 'Frey';
    gods.forEach(god => alert(god));
});


document.getElementById('f').addEventListener('click', () => {
    let numbers = [5, 7, 1, 8, 9];
    numbers.sort();
    numbers.forEach(n => alert(n));
});

document.getElementById('g').addEventListener('click', () => {
    let numbers = [5, 7, 1, 8, 9];
    numbers.sort((a, b) => b - a);
    numbers.forEach(n => alert(n));
});