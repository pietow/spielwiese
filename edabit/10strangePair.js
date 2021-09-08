const isStrangePair = (str1, str2) => str1.length === 0 ? str1 === str2 : str1[0] === str2.slice(-1) && str1.slice(-1) === str2[0] 

let result;
result = isStrangePair("ratio", "orator") 
console.log(result)
result = isStrangePair("sparkling", "groups") 
console.log(result)
result = isStrangePair("bush", "hubris") 
console.log(result)
result = isStrangePair("", "") 
console.log(result)
