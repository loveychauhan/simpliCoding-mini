const headerContainer = document.querySelector('.header-container')
const hamContainer = document.querySelector('.ham-container');
const hamburger = document.querySelector('.hamburger');
const crossContainer = document.querySelector('.cross-container')
const anchors = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section')


hamburger.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContainer.classList.add('show')
    hamContainer.classList.add('hide')
})

headerContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})
crossContainer.addEventListener('click', () => {
    hamContainer.classList.remove('hide')
    headerContainer.classList.remove('show')
})
window.addEventListener('click',() => {
    hamContainer.classList.remove('hide')
    headerContainer.classList.remove('show')
})


// anchors.forEach((anchor) => {
//     anchor.addEventListener('click', () => {
//         hamContainer.classList.remove('hide')
//         headerContainer.classList.remove('show')
//     })
// })
