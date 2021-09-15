//return the string 'Hello'
// const greeting = str => 'Hello'  //Definition of the Function greeting  
const greeting = function() { //we defined the function without parameters
    return 'hello'
}

const nick = function(str) { // a function definition with one parameter which takes a string
    return str              //return value
} 


// console.log(greeting()) //called function without a parameter
// console.log(nick('ivo')) //should return ivo

//use these two functions to print 'hello fra'

// console.log(greeting() + ' ' + nick('fra'))

const greetingNick = function(strOutter) {
    // return greeting() + ' ' + strOutter 
    // return greeting() + ' ' + nick(strOutter)
    // let newString = greeting() + ' ' + nick(strOutter)
    // return newString
    return 'hello' + ' ' + strOutter
} //Hello whatever

// console.log(greetingNick('blabla'))





//Volume of an cube: V = x * y * z //length, width, height 

// const cube = (x, y, z) => {return x * y *z}  
const cube = (x, y, z) => x * y *z  //shortest shorthand-version
// const cube = function(x, y, z) {
//     let result = x * y * z
//     return result
// }
// function cube(x, y, z) {
//     return x * y * z
// }


// let volume = cube(1, 2, 3) //arguments
// console.log(volume)

//triangle summe of all three angles is 180 degrees

const checkTriangle = function(alpha, beta, gamma) {
    return alpha + beta + gamma === 180 
    // return alpha + beta + gamma === 180 ? 'jepp, its triangle' : 'nope, no triangle' //condition ? if true : if false
} 

// console.log(checkTriangle(90,45,45))
// console.log(checkTriangle(90,90,45))

// console.log(90 + 45 + 45 === 180)


















