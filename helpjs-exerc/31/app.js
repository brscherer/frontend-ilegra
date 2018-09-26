for (let i = 0;i <= 10; i++) {
    for (let j = 0;j <= 10; j++) {
        document.getElementById('resultado').innerHTML += `<p>${i} x ${j} = ${ i * j}</p>`;
    }
}