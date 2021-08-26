let isDog;
isDog = isDog === true ? 'pat, pat': 'find me a dog to pat';
console.log(isDog);

let speed = Math.random()*100;
let message = speed > 50 ? 'your are speeding' : 'your speed is fine'
console.log(message);

//3
let age = Math.random() * 100;
message = age > 16 ? 'serve beer' : 'serve butter beer';
console.log(message);

//4
let isStudent = true;
message = isStudent ? 'ticket costs €5': 'ticket costs €12';

//6
let isEven = 30 % 2 === 0 ? '30 is even': 'is odd';
console.log(isEven);
isEven = 939 % 2 === 0 ? '30 is even': 'is odd';
console.log(isEven);
isEven = 40.9 % 2 === 0 ? '30 is even': 'is odd';
console.log(isEven);

// let biggest = Math.max.apply(Math, [1,2,3]);
// console.log(biggest);
