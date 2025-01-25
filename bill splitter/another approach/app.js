const billValue = document.querySelector('.bill-value');
const customTipInput = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people')
const generateBtn = document.querySelector('.generate-bill-btn');
const tipAmountdisplay = document.querySelector('.tip-amout span')
const totalAmountdisplay = document.querySelector('.total-amount span');
const eachPersonBill = document.querySelector('.each-person-bill span');
const tipContainer = document.querySelector('.tip-container');
const resetBtn = document.querySelector('.reset-btn')

let tipPercentage = 0;

generateBtn.addEventListener('click', () => {
    let billInput = parseInt(billValue.value);
    let totalPerson = parseInt(numberOfPeople.value);

    let tipAmount = billInput * tipPercentage / 100;
    let totalAmount = billInput + tipAmount;

    tipAmountdisplay.innerText = `₹${tipAmount}`;
    totalAmountdisplay.innerText = `₹${totalAmount}`;
    eachPersonBill.innerText = `₹${(totalAmount / totalPerson).toFixed(2)}`;
    resetBtn.disabled =  false;
})


tipContainer.addEventListener('click', (e) => {
    if(tipContainer.classList.contains('disabled')) return
    if (e.target !== tipContainer) {
        [...tipContainer.children].forEach((tip) => {
            tip.classList.remove('selected')
        })
        e.target.classList.add('selected');
        tipPercentage = parseInt(e.target.innerText);
        customTipInput.value = ''
    }
})

customTipInput.addEventListener('input', () => {
    tipPercentage = parseInt(customTipInput.value);
    [...tipContainer.children].forEach((tip) => {
        tip.classList.remove('selected')
    })
})

resetBtn.addEventListener('click' ,() => {
    billValue.value = '';
    numberOfPeople.value = '';
    tipPercentage = 0
    tipAmountdisplay.innerText = '';
    totalAmountdisplay.innerText = '';
    eachPersonBill.innerText = '';
    [...tipContainer.children].forEach((tip) => {
        tip.classList.remove('selected')
    })

    resetBtn.disabled =  true;
})

billValue.addEventListener('input', () => {
    if(billValue.value){
        customTipInput.disabled = false;
        numberOfPeople.disabled = false;
        tipContainer.classList.remove('disabled');

    }else {
        customTipInput.disabled = true;
        numberOfPeople.disabled = true;
        tipContainer.classList.add('disabled')
    }
})

numberOfPeople.addEventListener('input' , () => {
    if(numberOfPeople.value){
        generateBtn.disabled = false;

    }else{
        generateBtn.disabled = true;
    }
})