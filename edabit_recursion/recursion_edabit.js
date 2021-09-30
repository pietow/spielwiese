//Length of String
const length = str => {
    if (str === '') {
        return 0
    } else {
        return 1 + length(str.slice(0, -1))
    }
}

// console.log(length(""))
// console.log(length("apple"))

//
const reverse = str => {
    if (str === '') {
        return ''
    } else {
        return reverse(str.slice(1)) + str[0]
        return str.slice(-1) + reverse(str.slice(0, -1))
    }
}

console.log(reverse('hello'))
console.log(reverse('a'))

//Factorials
const factorial = n => {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// console.log(factorial(5))
// console.log(factorial(3))
// console.log(factorial(1))
// console.log(factorial(0))

//Fibonacci Numbers

const fib = n => {
    if (n <= 0) {
        return 0
    } else if( n === 1 ) {
        return 1
    } else {
        return fib(n - 2) + fib(n - 1)
    }
} 

// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(8))
