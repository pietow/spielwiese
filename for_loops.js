//1
let sum = 0;
for (let i = 0; i < 21; i++) {
    sum += i;
}
console.log(sum);

//2
for (let i = 0; i < 6; i++) {
    switch (i) {
        case 1:
            console.log('There is one bottle of beer on the wall.');
            break;
        case 2:
            console.log('There are two bottles of beer on the wall.');
            break;
        case 3:
            console.log('There are three bottles of beer on the wall.');
            break;
        case 4:
            console.log('There are four bottles of beer on the wall.');
            break;
        case 5:
            console.log('There are five bottles of beer on the wall.');
            break;
    }
}

//3
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
}

//4
let multiple = 0;
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        multiple = i * j;
        console.log(` ${i} * ${j} = multiple`);
    }
}

//5
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//6
// let sumMultiple = 0;
// for (let i = 0; i < Infinity; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && sumMultiple <= 1000) {
//         sumMultiple += i;
//         console.log(sumMultiple);
//         if (sumMultiple >= 1000) break;
//     }
// }

// for (let i = 0; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sumMultiple += i;
//         console.log(sumMultiple);
//     }
// }

//1 Bonus
//###########START Bonus 1 #######
for (let i = 1; i < 11; i++) {
    process.stdout.write(`${i}00 `);
}

console.log('');

for (let i = 0; i < 11; i += 2) {
    process.stdout.write(`${i} `);
}

console.log('');

for (let i = 3; i < 16; i += 3) {
    process.stdout.write(`${i} `);
}

console.log('');

for (let i = 9; i > -1; i--) {
    process.stdout.write(`${i} `);
}

console.log('');

for (let i = 1; i < 5; i++) {
    process.stdout.write(`${i} `);
    process.stdout.write(`${i} `);
    process.stdout.write(`${i} `);
}

console.log('');

for (let i = 1; i < 5; i++) {
    process.stdout.write(`${i} `);
}
for (let i = 1; i < 5; i++) {
    process.stdout.write(`${i} `);
}
for (let i = 1; i < 5; i++) {
    process.stdout.write(`${i} `);
}

console.log('');
//################### END  Bonus 1

let word = 'madam';
// word = 'piet';
let reverseWord = [...word].reverse().join('');
let isPalindrome = word === reverseWord ? true : false;
console.log(isPalindrome)
