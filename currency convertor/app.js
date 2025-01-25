const convertBtn = document.querySelector('.convert-btn');
const convertAmt = document.querySelector('.convert');
const changeCurr = document.querySelector('.change-curr');
const result = document.querySelector('#result');
const showConverted = document.querySelector('.show-converted');
const custom = document.querySelector('.custom');
const customInput = document.querySelector('.custom-input')
const addCurrency = document.querySelector('.add-currency')


const currencies = {
    'USD': 1,
    'EUR': 0.96,
    'AUD': 1.54,
    'INR': 86.24
}

showConverted.addEventListener('keydown', (e) => {
    e.preventDefault()
})


function convertcurrency(fromCurrency, toCurrency) {
    showConverted.value = (currencies[toCurrency] / currencies[fromCurrency] * convertAmt.value).toFixed(2);
}


function addNewOption(toAddIn) {
    let newOption = document.createElement('option')
    newOption.innerText = customInput.value.toUpperCase();
    toAddIn.insertBefore(newOption, toAddIn.firstChild);
}

function addNewCurr() {
    if (customInput.value) {
        for (let currency in currencies) {
            if (currency === customInput.value.toUpperCase()) {
                alert(`${customInput.value} already existed.`)
                return
            }
        }
        let inputCurrencyValue = prompt(`Enter exchange rate for 1 USD to ${customInput.value}`);
        addNewOption(changeCurr);
        addNewOption(result)
        currencies[customInput.value.toUpperCase()] = inputCurrencyValue;
    }
    else {
        customInput.classList.add('not-filled')
        alert('Enter the  Currency in the custom input field');
        customInput.addEventListener('input', () => {
            customInput.classList.remove('not-filled')
        })
    }
}

convertBtn.addEventListener('click', () => {
    if (changeCurr.value === result.value) {
        showConverted.disabled = false
        showConverted.value = convertAmt.value;
    }
    else if (result.value === 'Custom') addNewCurr();
    else {
        for (let currency in currencies) {
            if (changeCurr.value === currency) {
                let fromCurrency = currency;
                let toCurrency = result.value;
                convertcurrency(fromCurrency, toCurrency)
            }
        }
    }
})

addCurrency.addEventListener('click', () => {
    addNewCurr()
})
