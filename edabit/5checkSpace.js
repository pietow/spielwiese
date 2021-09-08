const hasSpaces = str => str.includes(' ') 

let result;
result = hasSpaces("hello") 
console.log(result)
result = hasSpaces("hello, world") 
console.log(result)
result = hasSpaces(" ") 
console.log(result)
result = hasSpaces("") 
console.log(result)
result = hasSpaces(",./!@#") 
console.log(result)
