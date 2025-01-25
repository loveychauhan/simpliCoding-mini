const user = document.querySelector('.user');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner')
const compWinsCount = document.querySelector('.comp');
const youWinCount = document.querySelector('.you');
const reset = document.querySelector('.reset')

const imgSrc = ['<img class="rock" src="images/rock.png" alt="">',
    '<img class="paper" src="images/paper.png" alt="">',
    '<img class="scissor" src="images/scissors.png" alt="">']


let usrWins = 0;
let compWins = 0;
user.addEventListener('click', (e) => {
    document.body.classList.remove('hide')
    let randomInd = Math.floor(Math.random() * 3);
    computer.innerHTML = `Computer ${imgSrc[randomInd]}`
    checkWinner(e.target.className, computer.children[0].className)
})

function checkWinner(usrPick, compPick) {
    if (usrPick === compPick) winner.innerText = 'Its a draw';
    else if ((usrPick === 'rock' && compPick === 'scissor') || (usrPick === 'scissor' && compPick === 'paper') || (usrPick === 'paper' && compPick === 'rock')) {
        winner.innerText = 'You Win!';
        youWinCount.innerText = ++usrWins
    }
    else {
        winner.innerText = 'computer Win!';
        compWinsCount.innerText = ++compWins
    }
}

reset.addEventListener('click', () => {
    if (computer.childElementCount === 1) computer.children[0].remove();
    document.body.classList.add('hide')
    winner.innerText = '';
    usrWins = 0;
    compWins = 0;
    compWinsCount.innerText = 0
    youWinCount.innerText = 0
})


