//Check Values in an array
const all = (arr, func) => {
    if (arr.length === 0) return true
    return func(arr[0]) && all(arr.slice(1), func)
    // return func(arr[0]) && all(arr.slice(1))
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7
})

// console.log(allAreLessThanSeven); // false

//Product of an array
var productOfArray = arr => {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

var six = productOfArray([1, 2, 3]) // 6
var sixty = productOfArray([1, 2, 3, 10]) // 60

// console.log(six)
// console.log(sixty)

//Search JS object
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    },
                },
            },
        },
    },
}

const contains = (obje, val) => {
    let val_arr = Object.values(obje)
    if (val_arr.includes(val)) return true
    else if (val_arr.length === 0) return false
    let inner_obje = val_arr[0]
    return contains(inner_obje, val)
}

let hasIt = contains(nestedObject, 44) // true
let doesntHaveIt = contains(nestedObject, 'foo') // false
// console.log(hasIt)
// console.log(doesntHaveIt)

const totalIntegers = arr => {
    if(arr.length === 0) return 0 //if all elements are shifted out add zero and exit recursion
    if (Array.isArray(arr[0])) {  //if array in array flaten array by recursion
        return totalIntegers(arr[0].concat(arr.slice(1))) //take first element which is an array and concat the rest to it
    } //e.g. [[[5], 3], 2, 0 .......] becomes [[5], 3, 2, 0 ..........] since arr[0] is passed to recursion function we go each recursion step deeper in the nested array
    if (!Array.isArray(arr[0]) && typeof arr[0] === 'number') { //if flat remove number and add one to recursion result to count the removal of the number
        arr.shift()
        return 1 + totalIntegers(arr)
    } else if(typeof arr[0] !== 'number') { //remove all other datatypes but without counting the removal
        arr.shift()
        return totalIntegers(arr)
    } 
}

let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]) // 7
// console.log(seven)

const sumSquares = arr => {
    if (arr.length === 0) {
        return 0
    } else if(Array.isArray(arr[0])) {
        return sumSquares(arr[0].concat(arr.slice(1)))
    } else {
        return arr.shift() ** 2 + sumSquares(arr)
    }
} 

let l = [1,2,3]; 
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14
l = [[1,2],3]; 
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
// console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
// console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

const replicate = (n, ...num) => {
    if (n === 1) return num
    if (n === -2) return []
    return num.concat(replicate(n - 1, num[0]))
} 

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []
