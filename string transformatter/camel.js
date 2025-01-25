let str = 'this is the string'
let arr = str.split(' ')
let arr2 = [arr[0],]
for (let a = 1; a<arr.length; a++){
    let first = arr[a][0].toUpperCase()
    let rest = arr[a].slice(1)
    arr2.push(first + rest)
}
console.log(arr2.join(''))