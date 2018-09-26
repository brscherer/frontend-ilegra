let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');

let arr = [first.src, second.src, third.src, fourth.src];
let gif = document.getElementById('bear');

let animation = 0;
let position = 0;
let width = window.screen.availWidth;

setInterval(() => {

    gif.src = arr[animation];
    gif.style = `left: ${ position > width ? position = 0 : position }px;`

    animation++;

    animation > 3 ? animation = 0 : animation;
    position += 10;

}, 250);