const sameCase = str => str.match(/[A-Z]?/g).join('').length === str.length || str.match(/[a-z]?/g).join('').length === str.length

let result;
result = sameCase("hello") 
console.log(result)
result = sameCase("HELLO") 
console.log(result)
result = sameCase("Hello") 
console.log(result)
result = sameCase("ketcHUp") 
console.log(result)
