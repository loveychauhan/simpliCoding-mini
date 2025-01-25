const play = document.querySelector('button');
const die1 = document.querySelector('.die1')
const die2 = document.querySelector('.die2');
const winner = document.querySelector('.winner');
const draw = document.querySelector('.draws');

const randomNumber = ['1one', '2two', '3three', '4four', '5five', '6six'];

play.addEventListener('click', () => {
    makeRoll()
})

function makeRoll() {
    let ind1 = Math.floor(Math.random() * randomNumber.length)
    let ind2 = Math.floor(Math.random() * randomNumber.length)
    dieRoll(randomNumber[ind1].slice(1), randomNumber[ind2].slice(1))
    makewin(parseInt(randomNumber[ind1][0]), parseInt(randomNumber[ind2][0]))
}
function dieRoll(rand1, rand2) {
    die1.classList.remove('one', 'two', 'three', 'four', 'five', 'six')
    die2.classList.remove('one', 'two', 'three', 'four', 'five', 'six')
    die1.classList.add(rand1)
    die2.classList.add(rand2)
    draw.innerText = "WINS"
}
function makewin(p1, p2) {
    if (p1 > p2) winner.innerText = 1;
    else if (p2 > p1) winner.innerText = 2;
    else {
        winner.innerText = '';
        draw.innerText = "DRAWS"
    }
}
makeRoll()