// console.log('#############Who is who##########')
// let count = 0
// ;(function immediate() {
//     if (count === 0) {
//         let count = 1 //local variable and the scope; interpreter takes the variable of the nearest scope
//         // console.log(count) // What is logged?
//     }
//     // console.log(count) // What is logged?
// })()

console.log('#############Tricky closure##########')
// for (let i = 0; i < 3; i = i + 1) {
//     setTimeout(function log() {
//         console.log(i) // What is logged?
//     }, 1000)
    // (lockedInIndex => {
    //     setTimeout(function log() {
    //         console.log('iffy, '+lockedInIndex) // What is logged?
    //     }, 1000)
    // })(i)
// }

// console.log(`after loop ${i}`)


console.log('#############Question5 ##########')
function createIncrement() {
    let count = 0

    function increment() {
        count++
    }

    let message = `Count is ${count}` //WHEN DO WE INITIALIZE MESSAGE? ITS INITALIZE WHEN COUNT IS 0: so let message = count is the reason
    function log() {
        console.log(message)
    }

    return [increment, log]
}
const [increment, log] = createIncrement()
increment() //1
increment() //2
increment() //3
log() // 3

console.log('#############Question6 ##########')
function createStack() {
    let items = []
    return {
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop()
        },
    }
}
const stack = createStack()
stack.push(10)
stack.push(5)
stack.pop() // => 5
// stack.items = [1,2,3] 
// console.log(stack.items)

console.log('#############Question7 ##########')
function multiply(number1, number2) {
  if (number2 !== undefined) {
    return number1 * number2;
  }
  return function doMultiply(number2) {
    return number1 * number2;
  };
}
multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22


