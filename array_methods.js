////1
//let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
//let second = euroCities[1];
//console.log(euroCities);
//console.log(second);
////2
//euroCities[0] = "Berlin";
//console.log(euroCities);
////3
//console.log(euroCities.length);
////4
//euroCities.pop();
//console.log(euroCities);
////5
//euroCities.push("Budapest");
//console.log(euroCities);
////6
//euroCities.splice(1, 2); //start at index1 and remove 2 elements
//console.log(euroCities);
////7
//let asianCities = ["Moskau", "Phnom Penh", "Bankok", "Jakarta", "Kathmandu"]
////8
//console.log(asianCities)
//let subAsia = asianCities.slice(1,4)
//console.log(subAsia)
////9
//let worldCities = euroCities.concat(asianCities)
//console.log(worldCities)
//console.log((euroCities + asianCities).split(','))
////10
//console.log(worldCities.reverse())
////11
//worldCities[1] = "Toronto";
//console.log(worldCities)
////12
//worldCities.splice(2,0, "Washington")
//console.log(worldCities)
////13
//console.log(worldCities.toString())
//console.log(worldCities.join(', '))

////Bonus
//let str = "Hello World";
//console.log(str.split(/(.)/).reverse().join('')) //regex: . = any char except newline
//console.log(str.split('').reverse().join('')) 

//Extra Practice
let siblings = ["sib1","sib2","sib3","sib4"]
let parents = ["Sascha", "Steffie"]
console.log(siblings)
siblings.push(...parents) // siblings.concate(parents)
// console.log(...parents)
console.log(`sib + parents:HERE ${siblings}`) //template strings
// console.log("sib + parents", siblings)
let familiy = siblings;
familiy.push('lutzi')
console.log(familiy)
console.log(familiy.reverse())
console.log(familiy[1])
familiy[1] = familiy[1].toUpperCase()
console.log(familiy)

