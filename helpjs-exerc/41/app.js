let counter = document.getElementById('counter-content');

setInterval(() => {
    counter.innerHTML == '1' ? counter.innerHTML = '5' : counter.innerHTML--;
}, 1000);