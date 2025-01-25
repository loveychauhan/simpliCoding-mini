const login = document.querySelector('#a-login');
const dialogBox = document.querySelector('.dialog-box')
const main = document.querySelector('main')
const passlock = document.querySelector('.passlock-svg')
const passunlock = document.querySelector('.passunlock-svg')
const password = document.querySelector('#password')
const maincross = document.querySelector('.dialog-box .cross')
const navigations = document.querySelector('.navigations')
const hamburger = document.querySelector('.hamburger')
const navCross = document.querySelector('.nav-cross')

;(() =>{
    login.addEventListener('click',(e)=>{
        e.preventDefault()
        dialogBox.classList.toggle('fig-show');
        navigations.classList.add('fig')
        navCross.classList.add('fig')
        hamburger.classList.remove('fig')
    })
    maincross.addEventListener('click',()=>{
        dialogBox.classList.remove('fig-show')
    })
    passlock.addEventListener('click',()=>{
        passlock.classList.add('fig-hide')
        password.type = 'text'
        passunlock.classList.add('fig-show')
    
    })
    passunlock.addEventListener('click',()=>{
        passlock.classList.remove('fig-hide')
        password.type = 'password'
        passunlock.classList.remove('fig-show')
    
    })
    hamburger.addEventListener('click',()=>{
        navigations.classList.remove('fig')
        navCross.classList.remove('fig')
        hamburger.classList.add('fig')
    })
    navCross.addEventListener('click',()=>{
        navigations.classList.add('fig')
        navCross.classList.add('fig')
        hamburger.classList.remove('fig')
    })


})()
