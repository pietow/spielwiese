let isDogBetter = true;
let isCatBetter = false;

console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));

let atoms = 1;
let sandGrains = 2;
let starsInSky = 3;

console.log('-----------');
console.log(atoms > starsInSky && atoms > sandGrains);
console.log(atoms != sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms);
console.log(atoms === starsInSky || atoms != sandGrains);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);

console.log('-----------');
console.log(3 == "3"); //true
console.log(3 === "3"); //false; always use strict equality; 3 = "3" gives an error

console.log('-----------');
let bla = true;
// console.log(!bla ? 'ba': 'bu'); //expression ? if true : if false;
console.log(!bla ? 'if true': 'if false'); //expression ? if true : if false;


console.log('-----------');
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; // falsy OR trusty -----> stops and trusty variable is printed

console.log(name);
name === name ? '': ''


