const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const bmiDisplay = document.querySelector('.bmi-display')
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if((height.value) && (weight.value)){
        let heightValue = parseInt(height.value) / 100;
        let weightValue = parseInt(weight.value)
        bmiDisplay.innerText = (weightValue / (heightValue ** 2)).toFixed(2)
    }
  
})