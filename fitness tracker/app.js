const makeNote = document.querySelector('.make-note');
const workoutType = document.querySelector('.workout-type');
const workoutDuration = document.querySelector('.workout-duration');
const logContainer = document.querySelector('.log-container');
const darkLight = document.querySelector('.dark-light');
const logAlert = document.querySelector('.alert')



darkLight.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

makeNote.addEventListener('click', () => {
    if (workoutType.value && workoutDuration.value) {
        logAlert.classList.add('hide')
        let newLog = document.createElement('div')
        newLog.classList.add('log')
        newLog.innerHTML = `${workoutType.value} - ${workoutDuration.value} <button class='log-remove'>Delete</button>`
        logContainer.append(newLog);
        workoutType.value = ''
        workoutDuration.value = ''
        // removeLog()
    }else{
        logAlert.classList.remove('hide');

    }

})


logContainer.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains('log-remove')) e.target.parentElement.remove()
    

})

// function removeLog() {
//     const logRemove = document.querySelectorAll('.log-remove');
//     logRemove.forEach((log) => {
//         log.addEventListener('click', () => {
//             log.parentElement.remove()
//         })
//     })

// }
