const isEmpty = str => str.length === 0 || str === ' ' 

let result;
result = isEmpty("") 
console.log(result)
result = isEmpty(" ") 
console.log(result)
result = isEmpty("a")
console.log(result)
