


function fun(checkArray){
    let pointerId = checkbox2;
    checkArray.forEach((x)=>{
        if(pointerId === x)  return checkArray.indexOf(x)     
    })
}
const checkArray = [checkbox1,checkbox2,checkbox3];
console.log(fun(checkArray))
