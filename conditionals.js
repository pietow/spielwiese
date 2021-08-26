//1
let x = 49;
let y = 99;
// let y = Math.random() * 100

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
  // console.log(`is in range: ${x} and ${y}`)
  console.log("true");
} else {
  console.log("it is not");
}



let z = 49;
[x, y, z] = [5, 5, 100];
//2
if ((x >= 50 && x <= 99) || (z >= 50 && z <= 99) || (y >= 50 && y <= 99)) {
  console.log(`is in range: x:${x} and y:${y} and z: ${z}`);
  console.log("true");
} else {
  console.log("false");
}

//3
if (x > y && x > z) {
  console.log("x");
} else if (y > x && y > z) {
  console.log("y");
} else if (z > x && z > y) {
  console.log("z");
} else {
  console.log("none");
}

//4
let [strPrefix, str] = ["Mega", "ybla"];

if (str.slice(0, 2) === "Py") {
  console.log(str);
} else {
  console.log(strPrefix + str);
}

//5
let sum = x + y + z;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}

//6
let [int1, int2] = [12, 4];
sum = int1 + int2;

if (sum === 8 || Math.abs(int1 - int2) === 8) {
  console.log("true");
} else {
  console.log("false");
}
//7
if (sum === 15 || int1 === 15 || int2 === 15) {
  console.log("true");
} else {
  console.log("false");
}

//8
[int1, int2] = [1, 4];
if (int1 % 7 === 0 || int1 % 11 === 0 || int2 % 7 === 0 || int2 % 11 === 0) {
  console.log("true");
} else {
  console.log("false");
}

//9
if (int1 === int2) {
  console.log(3 * (int1 + int2));
} else {
  console.log("false");
}

//10
if (int1 >= 19) {
  console.log((int1 - 19) * 2);
} else {
  console.log("false");
}

//11
let [firstName, age] = ["Piet", 35];
if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age < 20) {
  console.log(`${firstName} is a teenager`);
} else {
  console.log(`${firstName} is an adult`);
}

//12
