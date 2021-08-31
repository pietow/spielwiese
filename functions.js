//1
function multiply(x, y) {
    return x * y;
}

console.log(multiply(1, 2));

//2
let multiply2 = function (x, y) {
    return x * y;
};

console.log(multiply2(2, 3));

//3
multiply3 = (x, y) => x * y;
console.log(multiply3(3, 4));

//4
function remain(x, y) {
    return x % y;
}
let remain2 = function (x, y) {
    return x % y;
};
let remain3 = (x, y) => x % y;

console.log(remain(1, 2));
console.log(remain3(1, 2));
console.log(remain3(1, 2));

arr = [1, 2, 3];

console.log(
    arr.map((x) => {
        return x ** 2;
    })
);
