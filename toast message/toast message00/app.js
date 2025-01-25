const lrPosition = document.querySelector('.lr-position');
const tbPosition = document.querySelector('.tb-position');
const toastMessage = document.querySelector('.toast-type');
const generateToast = document.querySelector('.generate-toast');
const toastContainer = document.querySelector('.toast');
const cross = document.querySelector('.cross');
const messageOutput = document.querySelector('.toast-message');
const messageInput = document.querySelector('.message-input');
const messageIcon = document.querySelector('.message-icon');
const slider = document.querySelector('.slider')





generateToast.addEventListener('click', () => {
    toastContainer.classList.remove('cross');
    messageInput.innerText = messageOutput.value;
    toastContainer.classList.remove('light', 'bottom', 'left', 'top', 'warning', 'success', 'info', 'error')
    if ((lrPosition.value === 'Left') && (tbPosition.value === 'Top')) {
        toastContainer.classList.add('left', 'top')
    }
    else if ((lrPosition.value === 'Left') && (tbPosition.value === 'Bottom')) {
        toastContainer.classList.add('left', 'bottom')
    }
    else if ((lrPosition.value === 'Right') && (tbPosition.value === 'Top')) {
        toastContainer.classList.add('right', 'top')
    }
    else if ((lrPosition.value === 'Right') && (tbPosition.value === 'Bottom')) {
        toastContainer.classList.add('right', 'bottom')
    }
    if (toastMessage.value === 'Warning') {
        messageIcon.innerText = '⚠';
        toastContainer.classList.add('warning')
    }
    else if (toastMessage.value === 'Error') {
        messageIcon.innerText = '!';
        toastContainer.classList.add('error')
    }
    else if (toastMessage.value === 'Success') {
        messageIcon.innerText = '✓';
        toastContainer.classList.add('success')
    }
    else if (toastMessage.value === 'Info') {
        messageIcon.innerText = 'ⓘ';
        toastContainer.classList.add('info')
    }


})

cross.addEventListener('click', (e) => {
    e.stopPropagation();
    toastContainer.classList.add('cross');
})

slider.addEventListener('change', () => {
    setTimeout(() => {
        toastContainer.classList.add('cross');
    }, slider.value * 100)
})