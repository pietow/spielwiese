// without a separator, the end of one statement might appear to be the be the beginning of the next statement.
//in js you can usually omit the semicolon between two statement if those statement are written on seperate lines.

//optional
// a = 3;
// b = 4;

//first ; is reqired
// a = 3; b = 4;

//js does not treat every line break as a semicolon: it treats a line break as a semicolon if the next nonspace character cannot be 
// interpreted as a continuation of the current statement

// let c //cannot parse let c c without a semicolon
// c   //second linebreak because js can continue parsing the longer statement c = 3;
// =
// 3
// console.log(c)

//js interprets this code like this:

// let c; c = 3; console.log(c);

//suprising cases
//let y = x + f
//(a + b).toString()

////----->

//let y = x + f(a + b).toString();

let a = 1
let b = 1

a
++
b

console.log(a)
console.log(b)
