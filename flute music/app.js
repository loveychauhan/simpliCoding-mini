const main = document.querySelector('main');

main.addEventListener('click' ,(e) => {
    if(main === e.target) return
    if(e.target.innerText === 'w') e.target.children[0].play()
    if(e.target.innerText === 'a') e.target.children[0].play()
    if(e.target.innerText === 's') e.target.children[0].play()
    if(e.target.innerText === 'd') e.target.children[0].play()
    if(e.target.innerText === 'j') e.target.children[0].play()
    if(e.target.innerText === 'k') e.target.children[0].play()
    if(e.target.innerText === 'l') e.target.children[0].play()
})