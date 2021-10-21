const smArr = [5, 3, 2, 35, 2]

const bigArr = [
    5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
    2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
    35, 2,
]
//O(1)
// const a1 = performance.now()
// smArr.push(27)
// const a2 = performance.now()
// console.log(`Time: ${a2 - a1}`) // Less than 1 Millisecond

// const b1 = performance.now()
// bigArr.push(27)
// const b2 = performance.now()
// console.log(`Time: ${b2 - b1}`) // Less than 1 Millisecond

//O(n)
// const a1 = performance.now();
// smArr.map( x => x*2  )
// const a2 = performance.now();
// console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

// const b1 = performance.now();
// bigArr.map( x => x*2  )
// const b2 = performance.now();
// console.log(`Time: ${b2 - b1}`); // 13 Milliseconds

//O(n^2)
// const a1 = performance.now();
// smArr.forEach(() => {
//     smArr.forEach(item => item)
// });
// const a2 = performance.now();
// console.log(`Time: ${a2 - a1}`); // 8 Milliseconds

// const b1 = performance.now();
// bigArr.forEach(() => {
//     smArr.forEach(item => item)
// });
// const b2 = performance.now();
// console.log(`Time: ${b2 - b1}`); // 307 Milliseconds

//O(n!)
// const factorial = n => {
//     if (n === 1) return 1
//     return n * factorial(n - 1)
// }

// a1 = performance.now()
// console.log(factorial(30) )

// a2 = performance.now()
// console.log(`${a2 - a1}`)

//O(n * log n)
const quickSort = list => {
    console.log(`list: ${list}`)
    if (list.length < 2) return list
    let pivot = list[0]
    let left = []
    let right = []
    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i] < pivot) left.push(list[i])
        else right.push(list[i]) //push bigger elements than pivot element into right element
    } //pivot elements gets bigger 
    console.log(`left: ${left}`)
    console.log(`pivot: ${pivot}`)
    console.log(`right: ${right}`)
    return [...quickSort(left), pivot, ...quickSort(right)]
}
quickSort([2,0,3,4,5,612])


