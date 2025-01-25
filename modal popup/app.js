const button  = document.querySelector('.newsletter');
const cross = document.querySelector('.cross');
const main = document.querySelector('main')

button.addEventListener('click',() => {
   main.classList.add('rotate')
})
cross.addEventListener('click',() => {
    main.classList.remove('rotate')
})
