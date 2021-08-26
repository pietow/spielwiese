//1
let determiner = 10
let x
if (determiner < 0) {
    x = - Math.random() * 100
} else {
    x =  Math.random() * 100
    	
}               
x = determiner < 0 ? "Less than 0": "Greater or equal to 0"
console.log(x)

//2
let updater

if (determiner > 0) {
    updater = "Greater or equal to 0"
    let message = "Positive Integer"
    console.log(message)
} else {
    // console.log(message) //not declared
    updater =  "Less than 0"
    	
}               
console.log(updater)
// console.log(message) //not declared

//3

let num = determiner > 0 ? Math.random() * 100 : -Math.random() * 100 //depending on the condition, we could assign a value to a variable, 
//for more complex statements and assignments we would use if else statements

