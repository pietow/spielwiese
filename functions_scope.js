//1
const exp = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        for (let i = 1; i <= y; i++) {
            console.log(x ** i);
        }
    }
};

exp(3, 5);
console.log('-------');
exp(2, 8);

//2
let favorite = 'apple';
const printFavoriteFruit = (x) => {
    let favorite = x;
    console.log(`My favorite fruit is: ${favorite}`);
};

printFavoriteFruit(favorite);

//3
const exponent = (x, y) => (result = x ** y);

// console.log(exponent(2, 3));
console.log(result) // result can only be accessed in the block scope of the function
