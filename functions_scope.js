//1
const exp = (x, y) => {
    let result = []
    if (typeof x === 'number' && typeof y === 'number') {
        for (let i = 1; i <= y; i++) {
            // console.log(x ** i);
            result.push(x ** i)
        }
    }
    return result.join(' ')
};



;
console.log(exp(3, 5))
console.log('-------');
exp(2, 8);

//2
let favorite = 'apple';
const printFavoriteFruit = () => {
    favorite = 'mango';
    console.log(`My favorite fruit is: ${favorite}`);
    return `My favorite fruit is: ${favorite}`;
};

printFavoriteFruit();

//3
const exponent = (x, y) => (result = x ** y);

// console.log(exponent(2, 3));
// console.log(result) // result can only be accessed in the block scope of the function
