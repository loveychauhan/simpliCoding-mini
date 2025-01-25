const wordToAdd = ['Developer', 'Coder']

const usrText = document.querySelector('form');
const text = document.querySelector('.text');
const dynamicText = document.querySelector('.dynamic-text');
const removeText = document.querySelector('.remove-text')

usrText.addEventListener('submit', (e) => {
    e.preventDefault();
    if (text.value) wordToAdd.push(text.value)
    if (removeText.value) removeWord()
    text.value = ''
    removeText.value = ''
})

function removeWord() {
    if (wordToAdd.length > 0) {
        let wordPosition = wordToAdd.indexOf(removeText.value);
        if (wordPosition != -1) {
            wordToAdd.splice(wordPosition, 1)
        }
    }
}

let ind = 0;
let reverse = false;
let skipUpdate = 0
let words = 0;
const timeinterval = setInterval(() => {
    if(skipUpdate){
        skipUpdate--
        return
    }
    if (wordToAdd.length > 0) {
        let word = wordToAdd[words]
        if (!reverse) {
            dynamicText.innerText += word[ind];
            ind++;
        } else {
            dynamicText.innerText = dynamicText.innerText.slice(0, dynamicText.innerText.length - 1)
            ind--
        }
        if (dynamicText.innerText.length === 0) {
            reverse = false;
            words++
        }
        if (wordToAdd.length === words) words = 0

        if (ind === word.length) {
            skipUpdate = 3
            reverse = true
        }
    } else {
        dynamicText.innerText  = 'Enter some words'
    }
}, 200)

clearInterval(timeinterval)

