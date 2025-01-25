const generateBtn = document.querySelector('.generate-meme');
const memeTitle = document.querySelector('.meme-title');
const memeImg = document.querySelector('.meme-img');
const authorOutput = document.querySelector('.meme-author');


function getMeme() {
    fetch('https://meme-api.com/gimme')
        .then((res) => {
            return res.json();

        }).then((data) => {
            const { author, title, url } = data;
            memeTitle.innerText = title;
            memeImg.src = url;
            authorOutput.innerText = `Meme By: ${author}`
        })
}
generateBtn.addEventListener('click', () => {
    getMeme()
})

getMeme()