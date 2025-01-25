const form = document.querySelector('form');
const fileInput = document.querySelector('.file-input');
const title = document.querySelector('.title')
const selectledfile = document.querySelector('.selectedfile')

form.addEventListener('click', () => {
    fileInput.click();
})
fileInput.addEventListener('change', (e) => {
    selectledfile.classList.remove('hide')
    title.innerText = e.target.files[0].name;
    // getname(e.target.files[0].name)
})

// function getname(filename) {
//     const selectHtml = `
//     <img src="files.svg" alt="">
//     <p class="title">${filename}</p>
// `
//     selectledfile.innerHTML = selectHtml

// }

