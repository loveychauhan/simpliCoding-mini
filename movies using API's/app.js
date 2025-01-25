const inputMovie = document.querySelector('#input-movie');
const imageContainer = document.querySelector('.image-container')
inputMovie.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const searchTerm = inputMovie.elements.movie.value
    const config = { params : { q : searchTerm }}
    const tvmaze = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    removeImage()
    getImage(tvmaze.data)
    inputMovie.elements.movie.value = ''

})
const getImage =  (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            if(img.src) imageContainer.append(img)
        }
      
   }
}

const removeImage = ()=>{
    const img = document.querySelectorAll('img');
    [...img].forEach((image)=> imageContainer.removeChild(image))
}
