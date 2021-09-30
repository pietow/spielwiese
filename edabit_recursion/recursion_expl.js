// const length = str => {
//     if(str === '') {
//         return 0
//     } else {
//         return  1 + length(str.slice(0, -1))
//         // return  1 + 1 + 1 + 1
//     }
// }
const length = str => {
    if(str === '') {
        return 0
    } else {
        let string_shorte = str.slice(0,-1)
        console.log(string_shorte)
        return 1 + length(string_shorte)
        // return 1 + (1 + length(string_shorte))
        //     .
        //     .
        //     .
        // return  1 + 1 + 1 + 1 + 1 + 0
    }
}



// console.log(length('hello')) //1 + 1 + 1 +1 + 1

let reverse = str => {
    if (str === '') {
        return ''
    } else {
        return str.slice(-1) + reverse(str.slice(0, -1))
    }
} 

// console.log(reverse('hello'))

const factorial = n => {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
} 

console.log(factorial(0))
