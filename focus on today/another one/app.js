const circleCheckboxes = document.querySelectorAll('.circle-checkbox');
const allinputs = document.querySelectorAll('.input-field');
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value');
const progressLabel = document.querySelector('.progress-label')

let totalInputs =  allinputs.length 
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let progressBarCount = Object.values(allGoals).filter((goal) => goal.completed).length;
progressValue.style.width = `${progressBarCount / totalInputs * 100}%`
progressValue.firstElementChild.innerText = `${progressBarCount}/ ${totalInputs} completed`

const quotes = [
    'Raise the bar by completing yours goals!!',
    'Well begun is half done',
    'You have achieved half hurrah!',
    'Just a step away, keep going!',
    'Woha! You just completed all the goals, time for chills :D' 
]
progressLabel.innerText = quotes[progressBarCount];

circleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        const inputfield = [...allinputs].every((inputchecker) => inputchecker.value);
        if (inputfield) {
            checkbox.parentElement.classList.toggle('checked');
            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed;
            progressBarCount = Object.values(allGoals).filter((goal) => goal.completed).length;
            progressValue.style.width = `${progressBarCount / totalInputs * 100}%`
            progressValue.firstElementChild.innerText = `${progressBarCount} / ${totalInputs} completed`;
            progressLabel.innerText = quotes[progressBarCount];
            localStorage.setItem('allGoals', JSON.stringify(allGoals))

        }
        else {
            progressBar.classList.add('show-error')
        }
    })
})

allinputs.forEach((input) => {
    if(allGoals[input.id]){
        input.value = allGoals[input.id].name;


        if (allGoals[input.id].completed) {
            input.parentElement.classList.add('checked')
        }
    }
    

    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error');
    })

    input.addEventListener('input', () => {
        if(allGoals[input.id]){
            if (allGoals[input.id].completed) {
                input.value = allGoals[input.id].name
                return
            }
        }
        allGoals[input.id] = {
            name: input.value,
            completed: false
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})
