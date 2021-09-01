let arr = [] //pop() shift() splice() slice()
let str = '' //toUpperCase() toLowerCae() subString() includes() slice()

// difference between method and property: slice() vs. length
// console.log([1,2].length)
// console.log('bubu'.length)

let array = []
for (let i = 1; i <= 4; i++) {
    // console.log(`Hey, I'm from the outer loop. It's iteration i: ${i}`)
    // console.log(`#################Loop boarder ########`)
    for (let j = 1; j <=3; j++) {
        // console.log(i)
        array.push(i)

        // console.log(`Hey, I'm from the inner loop - j: ${j} during iteration i: ${i}`)
    }
    // console.log(`#################Loop boarder ########`)
    // console.log('')
    // console.log('')
    
}

//FUNCTION DEFINITION
function loopy() {
    for (let j = 0; j <= 4 ; j++) {
        console.log(j)
    }
}


// console.log(array)
// console.log(array.join(' '))

//FUNCTION CALL
// loopy() //HERE I'M CALLING THE FUNCTION loopy ONCE

let array2 = []
for (let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 4 ; j++) {
        console.log(j)
        array2.push(j)
    }
}
console.log(array2.join(' '))















//console.log(`#####GOOD####`)
////version good practice
//for (let i = 1; i <=3; i++) {

//}
//console.log(`#####GOOD####`)
//console.log('')
//console.log('')


//console.log(`#####BAD####`)
////Version bad parctice
//// console.log('anything')
//// console.log('anything')
//// console.log('anything')
//console.log(`#####BAD####`)
