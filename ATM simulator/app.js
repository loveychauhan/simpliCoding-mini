const pin = document.querySelector('#pin');
const form = document.querySelector('form');
const message = document.querySelector('.message');
const atmFeatures = document.querySelector('.atm-features');
const changePassword = document.querySelector('.changePass')

let currBalance = 0;
let isLoggedIn = false;
let currPass = '1234';
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (pin.value === currPass) {
        message.innerText = `Logged in successfully.`
        isLoggedIn = true
        dofeature();

    }
    else message.innerText = `Invalid Pin.Please try again.`
})

function dofeature() {
    atmFeatures.addEventListener('click', (e) => {
        if (!isLoggedIn) message.innerText = `Please login first.`
        else {
            if (e.target.name === 'check-balance') {
                message.innerText = `Your current balance : $${currBalance}`
            }
            else if (e.target.name === 'deposit') {
                let depositedAmount = parseInt(prompt('Enter the amount you want do deposit?'))
                if (depositedAmount) {
                    currBalance += depositedAmount;
                    message.innerText = `Deposited $${depositedAmount}. Your new balance is $${currBalance}`
                }

            }
            else if ((e.target.name === 'withdrawl') && (currBalance > 0)) {
                let withdrawlAmount = parseInt(prompt('Enter the amount you want do withdrawl?'))
                if ((withdrawlAmount) && (withdrawlAmount <= currBalance)) {
                    currBalance -= withdrawlAmount;
                    message.innerText = `Withdrawl amount $${withdrawlAmount}. Your new balance is $${currBalance}`
                } else message.innerText = `Invalid amount or insufficient balance. Please try again.`


            }
            else if (e.target.name === 'logout') {
                console.log('hii')
                message.innerText = `Logout successfuly`;
                pin.value = ''
                isLoggedIn = false
            }
            else if (e.target.name === 'changePass') changePass();
        }

    })
}
function changePass() {
    let prepass = prompt('Enter previous Password');
    if (prepass && prepass === currPass) {
        let newpass = prompt('Enter new password')
        let reEnterPass = prompt('Re-enter password to cnfirm.');
        if ((newpass && reEnterPass) && newpass === reEnterPass) {
            currPass = newpass;
            console.log(currPass, newpass)
            message.innerText = `New password has been set.`
            isLoggedIn = false;
            pin.value = ''
        }
    }
}