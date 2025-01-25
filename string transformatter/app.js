const labels = document.querySelectorAll('label')
const usrInput = document.querySelector('input')
const lowerCaseOutput = document.querySelector('.lower-case')
const upperCaseOutput = document.querySelector('.upper-case')
const camelCaseOutput = document.querySelector('.camel-case')
const pascalCaseOutput = document.querySelector('.pascal-case')
const snakeCaseOutput = document.querySelector('.snake-case')
const kebabCaseOutput = document.querySelector('.kebab-case')
const trimOutput = document.querySelector('.trim')



function forCamel(text){
    let arr = text.split(' ')
        let arr2 = [arr[0],]
        for (let a = 1; a<arr.length; a++){
            let first = arr[a][0]? arr[a][0].toUpperCase():  text.slice(text.length)
            let rest = arr[a].slice(1)
            arr2.push(first + rest)
        }
        return arr2
} 

function forPascal(text){
    let arr = text.split(' ')
    let arr2 = []
    for (let a = 0; a<arr.length; a++){
        let first = arr[a][0]? arr[a][0].toUpperCase() : ''
        let rest = arr[a].slice(1)
        arr2.push(first + rest)
    }
    return arr2
}

// 
usrInput.addEventListener('input',function(e){
    console.log(e.target)
    stringFormatter();
})

stringFormatter();

function stringFormatter(){
    let text = usrInput.value
    lowerCaseOutput.innerText = text.toLowerCase()
    upperCaseOutput.innerText = text.toUpperCase()
    camelCaseOutput.innerText = forCamel(text).join('')
    pascalCaseOutput.innerText = forPascal(text).join('')
    snakeCaseOutput.innerText = text.replaceAll(' ','-')
    kebabCaseOutput.innerText = text.replaceAll(' ','-')
    trimOutput.innerText = text.replaceAll(' ','')
}






