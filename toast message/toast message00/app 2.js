
const toastContainer = document.querySelector('.toast');
const cross = document.querySelector('.cross');



toastContainer.addEventListener('click', (e) => {
    console.log('hii')
})

cross.addEventListener('click', (e) => {
    e.stopPropagation();
    toastContainer.classList.add('cross');
})