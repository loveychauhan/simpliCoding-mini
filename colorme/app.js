const main = document.querySelector('main');
const button = document.querySelector('button');
const input = document.querySelector('input')
const circles = document.querySelectorAll('.circle')


button.addEventListener('click', (e) => {
    circles.forEach((x) => {
        x.classList.remove('select')
        if(input.value === x.innerText){
            x.classList.add('select')
        }
    })
    // if(input.value === e.target.innerText)
})
