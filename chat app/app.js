const toCheck = document.querySelectorAll('.to-check');
const textbox = document.querySelector('.textbox');

toCheck.forEach((ele) => {
    ele.addEventListener('click', function () {
        ele.classList.toggle('check')
    })
})

const chatPage = document.querySelector('.chat-area');
chatPage.scrollTop = chatPage.scrollHeight - chatPage.clientHeight
textbox.addEventListener('submit', (e) => {
    e.preventDefault()
    let newText = e.target[0].value
    console.dir(newText);
    if (e.target[0].value) {
        chatPage.innerHTML += `<div class="chat-going">
        <p>${newText}</p>
        </div>`
    }

    chatPage.scrollTop = chatPage.scrollHeight - chatPage.clientHeight;
    e.target[0].value = ''
})
