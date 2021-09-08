const match = (str1, str2) => str1 === str2.toLowerCase() 

let result;
result = match("hello", "hELLo") 
console.log(result)
result = match("motive", "emotive") 
console.log(result)
result = match("venom", "VENOM") 
console.log(result)
result = match("mask", "mAskinG") 
console.log(result)
