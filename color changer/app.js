
const body = document.querySelector('body');
const h1 = document.querySelector('h1')
const btn = document.querySelector('#color-changer')
btn.addEventListener('click',() =>{
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const rgb = `rgb(${r},${g},${b})`
    body.style.backgroundColor = rgb;
    h1.innerText = rgb;
    btn.style.backgroundColor = `rgb(${b},${g},${r})`;

})

