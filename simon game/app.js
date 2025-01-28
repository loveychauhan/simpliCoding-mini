const blue = './sounds/blue.mp3';
const green = './sounds/green.mp3';
const red = './sounds/red.mp3';
const yellow = './sounds/yellow.mp3';
const wrong = './sounds/wrong.mp3';

const container = document.querySelector('.container');
const display = document.querySelector('.display');
const colors = document.querySelectorAll('.container div')

const sounds = new Map([
    ['red', new Audio(red)],
    ['blue', new Audio(blue)],
    ['green', new Audio(green)],
    ['yellow', new Audio(yellow)],
    ['wrong', new Audio(wrong)]
])

const colorRandom = ['red', 'green', 'blue', 'yellow'];
let usrPattern = [];
let compPattern = [];
let level = 0
let started = false;

colors.forEach((color) => {
    color.addEventListener('click', () => {
        let usrcolorName = color.id;
        usrPattern.push(usrcolorName);
        playSound(usrcolorName);
        animateClick(usrcolorName);
        checkClicks(usrPattern.length - 1)


    })
})

function playSound(name) {
    sounds.get(name).play()
}

function animateClick(name) {
    let clickedColor = document.querySelector(`.${name}`);
    clickedColor.classList.add('clicked')
    setTimeout(() => {
        clickedColor.classList.remove('clicked')
    }, 100)

}

function checkClicks(currentLevel) {
    if (usrPattern[currentLevel] === compPattern[currentLevel]) {
        if (usrPattern.length === compPattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000)
        }
    }else{
        sounds.get('wrong').play()
        document.body.classList.add('over')
        setTimeout(() => {
            document.body.classList.remove('over')
        }, 200)
        display.textContent = 'Game Over, Press Any Key to Restart'
        startOver()
    }
}
document.addEventListener('keypress', () => {
    if (!started) {
        display.innerText = `Level ${level}`;
        nextSequence();
        started = true;
    }

})


function nextSequence() {
    usrPattern = [];
    level++;
    display.innerText = `Level ${level}`
    let randomGenerate = Math.floor(Math.random() * 4)
    compPattern.push(colorRandom[randomGenerate])
    sounds.get(colorRandom[randomGenerate]).play()
    animateClick(colorRandom[randomGenerate])

}

function startOver() {
    compPattern = [];
    started = false;
    level = 0;
}



