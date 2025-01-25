const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const checkbox3 = document.querySelector('#checkbox3');
const checkboxSvg = document.querySelectorAll('.checkbox-svg');
const tasks = document.querySelectorAll('.tasks')
const alert = document.querySelector('.alert')
const progressBar = document.querySelector('.bar-fil')
const counter = document.querySelector('.counter')
const task1 = document.querySelector('.task1')
const task2 = document.querySelector('.task2')
const task3 = document.querySelector('.task3')


let count = 0;
function callCheckBox(){
    checkbox1.addEventListener('change',function(e){ 
        if(checkToRun(task1.value,e.target)){
            checkboxShow(e.target);
            alert.innerHTML = '';
        }  
        else alert.innerHTML = 'Please add three of your goals';
    })
    checkbox2.addEventListener('change',function(e){
        if(checkToRun(task2.value)) {
            checkboxShow(e.target);
            alert.innerHTML = '';
        }
        else alert.innerHTML = 'Please add three of your goals';
    })
    checkbox3.addEventListener('change',function(e){
        if(checkToRun(task3.value)) {
            checkboxShow(e.target);
            alert.innerHTML = '';
        }
        else alert.innerHTML = 'Please add three of your goals';
    })
}

const checkboxShow = (pointer)=>{
    let checkArray = ['checkbox1','checkbox2','checkbox3']
    let i = giveIndexes(checkArray,pointer)
    if(pointer.checked === true){
        checkboxSvg[i].classList.remove('fig-hide')
        tasks[i].classList.add('completed')
        count++;      
    }else{
        checkboxSvg[i].classList.add('fig-hide')
        tasks[i].classList.remove('completed')
        count--;     
    }
    progress(count)
}

function progress(count){
    if(count>0) {
        progressBar.classList.add('fill-bar')
        progressBar.style.gridColumnStart = `span ${count}`;
        counter.innerHTML = count;
        alert.innerHTML = '';
    }else if(count === 0){
        counter.innerHTML = 0 
        progressBar.classList.remove('fill-bar')
        alert.innerHTML = 'Please add three of your goals';
    }
    count = 0
}


function giveIndexes(arr,pointer){
    return arr.findIndex((x) => pointer.id === x)
}

function checkToRun(task,pointer){
    if( task !== '') return true
}
callCheckBox()