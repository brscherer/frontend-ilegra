let text = document.getElementById('text');
let list = document.getElementById('result');

let arr = [];
let str = '';

document.getElementById('btn').addEventListener('click', () => {
    arr.push(text.value);
    list.innerHTML += `<li>${arr[arr.length - 1]}</li>`
});

