const usrInput = document.querySelector('input')

let previousValue = ''
let firstThree = ''
usrInput.addEventListener('input',function(e){ 
    let val = e.target.value
    if(val.length === 4 && previousValue.length < val.length) {
        firstThree = val.substring(0,3)
        usrInput.value = (`+(${firstThree}) - ${val[val.length - 1]}`)
    } 
    else if(val.length === 9 && previousValue.length > val.length) usrInput.value = firstThree
    previousValue = val

})


