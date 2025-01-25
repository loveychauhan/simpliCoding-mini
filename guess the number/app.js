const form = document.querySelector('#form');
const usrInput = document.querySelector('#input');
const result = document.querySelector('#result')
const guessDisplay = document.querySelector('#guess')
const restart = document.querySelector('#restart')
const subBtn = document.querySelector('#sub-btn');




 (()=>{   
    let guesses = [];
    let random = Math.round(Math.random() * 100)
    let count = 0;
    form.addEventListener('submit',function(e){
        const userInputValue = parseInt(usrInput.value);
        usrInput.disabled = false;
        e.preventDefault();
            if(userInputValue  < random){
                result.innerHTML = 'Too low!'
                guesses.push(userInputValue )
                guessDisplay.innerText = `Your guesses: ${guesses.join(', ')}`
                count++;
            }else if(userInputValue  > random){
                result.innerHTML = 'Too high!'
                guesses.push(userInputValue )
                guessDisplay.innerText = `Your guesses: ${guesses.join(', ')}`
                count++;
            }else{
                result.innerHTML = 'You won Congrats!!'
                guesses.push(userInputValue )
                guessDisplay.innerText = `Your guesses: ${guesses.join(', ')}`
                restart.disabled = false;
                subBtn.disabled = true;
                usrInput.disabled = true;
            }
    
        if(count === 10){
            result.innerHTML = 'You lose:('
            guesses.push(userInputValue )
            guessDisplay.innerText = `Your guesses: ${guesses.join(', ')}`
            restart.disabled = false;
            subBtn.disabled = true;
            usrInput.disabled = true;
    
        }
        form.reset()
    
    })
    restart.addEventListener('click',function(){
        random = Math.round(Math.random() * 100)
        restart.disabled = true;
        subBtn.disabled = false;
        usrInput.disabled = false;
        result.innerHTML = '';
        guessDisplay.innerHTML = '';
        guesses = [];
        count++;
    })
    
})

