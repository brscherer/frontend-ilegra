let list = document.getElementById('names');
let gods = ['Aegir', 'Aud', 'Balder'];

gods.forEach(god => {
    list.innerHTML += `<li>${god}</li>`;
});
