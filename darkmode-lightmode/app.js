const darkLightBody = document.querySelector('#dark-light-toggle')
const darkContainer = document.querySelector('#dark-mode-container')
const details = document.querySelector('#details')




darkLightBody.addEventListener('change',function(){
    if(darkLightBody.checked === true){
        document.body.classList.add('on-dark-body');       
    }
    else if(darkLightBody.checked === false){
        document.body.classList.remove('on-dark-body'); 
        details.classList.remove('on-dark-container')     
    }
    darkContainer.checked = darkLightBody.checked;
    contained()
    
})

function contained(){
    details.classList.remove('p-styles')
    darkContainer.addEventListener('change',function(){
        if(darkContainer.checked === true){
            details.classList.remove('p-styles')
            details.classList.add('on-dark-container')
        }
        else if(darkContainer.checked === false){
            details.classList.remove('on-dark-container')
            details.classList.add('p-styles')
        }
    })
    
}
contained()
