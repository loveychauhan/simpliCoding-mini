const display = document.querySelector('#display')
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const changeNumber = document.querySelector('#number');
const reset = document.querySelector('#reset')
let displayValue = 0;
display.textContent = displayValue;
changeNumber.value = 1;
subtract.addEventListener('click',function(){
    usrValue = changeNumber.value
    displayValue -= parseInt(usrValue);
    display.textContent = displayValue;
})
add.addEventListener('click',function(){
    usrValue = changeNumber.value
    displayValue +=  parseInt(usrValue);
    display.textContent = displayValue;
})
reset.addEventListener('click',function(){
    display.textContent = 0;
})
