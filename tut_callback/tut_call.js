const callbackfunction = x => x ** 2 //callback
const higherOrderFunction = (x, callbackfn) => {
    return callbackfn(x)
} //higherOrderFunction

// console.log(higherOrderFunction(3, callbackfunction))

// console.log('########')

function modulo(int) {
    return int % 2
}
//product with 2
function product(int) {
    return int * 2
}

//addtion with 2
function addition(int) {
    return int + 2
}

//division with 2
function division(int) {
    return int / 2
}

function higherOrder2(int, fun) {
    return fun(int)
}

// let result = higherOrder2(2, modulo) //0
// let result = higherOrder2(2, x => x % 2 ) //0
// console.log(result)

// result = higherOrder2(4, product) // 8
// result = higherOrder2(4, x => x * 2 ) // 8
// console.log(result)

// result = higherOrder2(4, x => x + 2 ) //6
// console.log(result)

// result = higherOrder2(4, x => x / 2 ) //2
// console.log(result)

//a higher order function takes an callbackfunction as an argument

//scope if the this keyword
let obje = {
    bla: 'bla',
}

const outerfun = function () {
    return this
}

// console.log(outerfun())

// console.log(outerfun.apply(obje))

//map: square
let arr1 = [1, 2, 3, 4]
// console.log(arr1.map( a => a ** 2  )) //higher order function is map(); our callbackfunction:  a => a ** 2

//sort
obje2 = {
    bla: 'bla',
}
let arr2 = ['bla', 'a', 'A', 'zzz', 'Z']
let arr3 = [4, 5]
arr3.sort((a, b) => a - b) // 4 - 3 = 1
console.log(arr3)

// console.log('bla' - 'a')
// console.log(arr2.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1)))
let arr4 = ['b', 'z', 'c', 'a']
console.log(arr4.sort((a, b) => (a > b ? 1 : -1)))
console.log('a' < 'b')

let arr5 = [{name: 'a'}, {name: 'b'}]
console.log(arr5.sort( (a,b) => a.name > b.name ? -1 : 1  ))


//reduce
