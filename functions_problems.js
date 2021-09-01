//1
console.log(`---------------Assignment 1-----------------`)
const filterEvenNums = (x) => {
    let newArr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            newArr.push(x[i]);
        }
    }
    return newArr;
};

console.log(filterEvenNums([1, 2, 3, 4, 5, 6, 7, 8]));

//2
console.log(`---------------Assignment 2-----------------`)
const filterOddNums = (x) => {
    let newArr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 1) {
            newArr.push(x[i]);
        }
    }
    return newArr;
};

console.log(filterOddNums([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(filterOddNums([]));

//3
console.log(`---------------Assignment 3-----------------`)
const sumAll = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
};

console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sumAll([]));

//4
console.log(`---------------Assignment 4-----------------`)
const computeAverage = x => (x.length > 0 ? sumAll(x) / x.length : 0);

console.log(computeAverage([1, 2]));
console.log(computeAverage([]));

console.log(`-------------DEBUGGING 1----------`);
//5
function getNumsGreaterThan20(numbers) {
    let count = 0; //was in loop
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 20) {
            count += 1;
        }
    }
    return count;
}

console.log(getNumsGreaterThan20([21, 21, 32, 1]));

console.log(`-------------DEBUGGING 2----------`);
//6

function createSentence(words) {
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        sentence += words[i] + ' ';
        // if (i === words.length - 1) {
        //     // sentence = sentence.trim();
        //     // sentence += '.';
        // }
    }
    return sentence.trim() + '.';
}

console.log(createSentence(['George', 'is', 'hungry']));
