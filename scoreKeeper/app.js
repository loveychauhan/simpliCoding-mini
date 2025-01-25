let left =document.querySelector('#left')
let right =document.querySelector('#right')

const red = document.querySelector('.red')
const green = document.querySelector('.green')
const restart = document.querySelector('.restart')
const playingTurns = document.querySelector('.playingTurns')
let p1Score = 0
let p2Score = 0

winningScore = '5'
let turns = document.querySelector('.game-turns')

playingTurns.addEventListener('click',function(e){
   winningScore = e.target.innerHTML;
   turns.innerHTML = e.target.innerHTML;
   playingTurns.classList.toggle('playing-number')
})
let isGameOver = false;

red.addEventListener('click',function(){
    if(!isGameOver){
        p1Score++;
        left.innerHTML = p1Score;
        if(left.innerHTML === winningScore  ){
            isGameOver = true;
            p1wins()
        }
           
    }
})

green.addEventListener('click',function(){
    if(!isGameOver){
        p2Score++;
        right.innerHTML = p2Score
        if(right.innerHTML === winningScore ){
            isGameOver = true;
            p2wins()
        }
    }

})

restart.addEventListener('click',function(){
    left.innerHTML = 0;
    right.innerHTML = 0;
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    reset()


})

const reset = function(){
    left.style.color = 'black'
    right.style.color = 'black'
    red.style.backgroundColor = 'red';
    green.style.backgroundColor = 'green'
}
const p2wins = function(){
    left.style.color = 'red'
    right.style.color = 'green'
    red.style.backgroundColor = 'rgba(147, 47, 47, 0.41)'
    green.style.backgroundColor = 'rgba(147, 47, 47, 0.49)'
}
const p1wins = function(){
    left.style.color = 'green'
    right.style.color = 'red'
    red.style.backgroundColor = 'rgba(147, 47, 47, 0.41)'
    green.style.backgroundColor = 'rgba(147, 47, 47, 0.49)'

}

const crateUp = document.querySelector('#crateUp')
crateUp.addEventListener('click',function(){
    playingTurns.classList.toggle('playing-number')
})
