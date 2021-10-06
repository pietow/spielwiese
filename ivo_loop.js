// increment by 1
const arrayOfNumbers1 = [3, 45, 6, 56, 7, 9]
// a : with for loop
function loopIncrement(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1
    }
    return arr
}
console.log(loopIncrement(arrayOfNumbers1))

// b : callback function
const arrayOfNumbers2 = [3, 45, 6, 56, 7, 9]
function callBackIncrement(element) {
    return element + 1
}
//  console.log(callBackIncrement(2));
function increment(arr) {
    return arr.map(callBackIncrement)
}
console.log(increment(arrayOfNumbers2))
// c : map method
const arrayOfNumbers3 = [3, 45, 6, 56, 7, 9]
function incrementMethod(arr) {
    return arr.map(arr => arr + 1)
}
console.log(incrementMethod(arrayOfNumbers3))

// 5. Sum Up
// a : for loop
function loopSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += arr.length
    }
    return arr
}
console.log(loopSum(sum2([6, 7, 7])))
// b : callback
function callbackSum(x, y) {
    return x + y
}
function sum2(arr) {
    return arr.reduce(callbackSum)
}
// c : method
function sum2(arr) {
    return arr.reduce((a, b) => a + b)
}
console.log(sum2([1, 2, 3, 4, 5])) //returns 15
console.log(sum2([6, 7, 7]))

console.log('##########3##########')
// a : for loop
const rootNumbers = [0, 1, 4, 9, 16]
const rootNumbers2 = [0, 1, 4, 9, 16]

const squareFun = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] =  //what do you have type here??
    }
    return arr
}
console.log(squareFun(rootNumbers))
// b : callback
function callsquare(x) {
    return Math.sqrt(x)
}
function squareCall(arr) {
    return arr.map(callsquare)
}
console.log(squareCall(rootNumbers2))
