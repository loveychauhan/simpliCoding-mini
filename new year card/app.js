const userName = prompt("Enter your name");
const enterName = document.querySelector('#custom-name')
enterName.innerText = userName

const form = document.querySelector('form')
form.addEventListener('submit',function(evt){
    evt.preventDefault()
    const ul = document.querySelector('#lists')
    const input = document.querySelector('#input')
    const list = document.createElement('li')
    list.innerText = input.value
    ul.appendChild(list)
    input.value = ''

})