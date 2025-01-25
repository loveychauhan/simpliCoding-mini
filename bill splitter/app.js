const billAmount = document.querySelector('.bill-amount');
const tips = document.querySelectorAll('.tip span');
const customTip = document.querySelector('.custom-tip');
const generateBill = document.querySelector('.generate-bill');
const reset = document.querySelector('.reset');
const totalBill = document.querySelector('.totalBill');
const tipDisplay = document.querySelector('.tip-amount');
const eachPersonBill = document.querySelector('.each-split')
const totalPerson = document.querySelector('.total-person')
const billDetail = document.querySelector('.bill-detail')



function generate(tipValue) {
    if (totalPerson.value && billAmount.value) {
        console.log('im in')
        generateBill.addEventListener('click', (e) => {
            let productBill = parseInt(billAmount.value);
            let bill = productBill + productBill * tipValue / 100;
            totalBill.innerText = `\u20B9 ${bill}`;
            tipDisplay.innerText = `\u20B9 ${productBill * tipValue / 100}`;
            eachPersonBill.innerText =`\u20B9 ${bill / totalPerson.value}`;
        })
    }
}



billAmount.addEventListener('input', () => {
    if (billAmount.value) {
        billDetail.classList.remove('fade');
        customTip.disabled = false

    }
    else {
        billDetail.classList.add('fade');
        customTip.disabled = true
    }
})

customTip.addEventListener('input', () => {
    generate(customTip.value)
})

tips.forEach((tip) => {
    tip.addEventListener('click', (e) => {
        let tipValue = parseInt(e.target.innerText);
        generate(tipValue)

    })
})



reset.addEventListener('click', () => {
    totalBill.innerText = '';
    tipDisplay.innerText = '';
    eachPersonBill.innerText = '';
    totalPerson.value = '';
    billAmount.value = '';
    customTip.value = '';

})