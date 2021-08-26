str1 = "I can walk in the park all day!";
// console.log(str1.length)
// console.log(str1.split( " " ).length)
// let array = ["I", "can", "walk", "in", "the", "park", "all", "day!"];
// console.log(array.slice(5, 6));
// let newArray = array.slice(2);
// console.log(str1.split(" ").slice(5,6)[0]);
// console.log(str1.split(" ").slice(-3)[0]);
//2. version
console.log(str1.slice(-13, -9));
str2 = "Hello World";
console.log(str2.toUpperCase());
// console.log(str2.split(" ")[0].toUpperCase())
str3 = "Hello Earthling";
console.log(str3.toLowerCase());
str4 = "JavaScript";
console.log(str4.slice(3, 6));
// console.log(str4.substring(3,6));
str5 = "nice shoes";
console.log(str5.indexOf("l") === -1 ? 'not included': 'is included')
console.log(str5.includes("l") || str5.includes("n"));
str6 = str5;
// console.log(str6[0] + str6 + str6[0]);
console.log(str6.slice(0, 1) + str6 + str6[0]);
str7 = str4;
console.log(str7.slice(-3) + str7 + str7.slice(-3));
str8 = str3;
// str8[0] = str3.slice(-1);
console.log(str8.slice(-1) + str8.slice(1, -1) + str8[0]);
let [str9, strX, strY] = ["Piet", "Bielefeld", "sun"]; //destructuring page 57 destructuring assignment 
// const str9 = 'piet', city = 'bielfeld';
console.log(`${str9} lives in ${strX} where the ${strY} shines.`)
// let str9 = "Piet";
// let strX = "Bielefeld";
// let strY = "sun";
// let arryNum = [1, 2, 3];
// let newArr = arryNum.map(x => {if(x % 2 === 0) { return 'even' } else {return 'odd'}})
// console.log(newArr)

// console.log(str9 + " lives in " + strX + " where the " + strY + " shines.");
// console.log(`${str9} lives in ${strX} where the ${strY} shines.`);
str10 = "the quick brown fox";
console.log(str10[0].toUpperCase() + str10.slice(1));

console.log(
  str10
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ")
);
