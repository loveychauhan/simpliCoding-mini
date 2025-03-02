const leftBtn = document.querySelector('.left-button')
const rightBtn = document.querySelector('.right-button')
const basket1 = document.querySelector('.bakset-1')
const basket2 = document.querySelector('.bakset-2')


let basket1Value = parseInt(basket1.innerHTML)
let basket2Value = parseInt(basket2.innerHTML);

leftBtn.addEventListener('click', () => {
    leftClicked(basket1Value, basket2Value)
})
rightBtn.addEventListener('click', () => {
    rightClicked(basket1Value, basket2Value)
})

function leftClicked(leftValue, rightValue) {
    if (leftValue <= 100 && rightValue > 0) {
        basket1Value += 1;
        basket2Value -= 1;
        basket1.innerHTML = basket1Value;
        basket2.innerHTML = basket2Value
    }
}

function rightClicked(leftValue, rightValue){
    if(rightValue <= 100 && leftValue != 0){
        basket1Value -= 1;
        basket2Value += 1
        basket1.innerHTML = basket1Value;
        basket2.innerHTML = basket2Value
    }
}

