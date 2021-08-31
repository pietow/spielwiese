const exp = function(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        for (let i = 1; i < y + 1; i += 1) {
            console.log(` ${x} and ${i}`)
            let exponentialsOfX = x ** i 
            console.log(exponentialsOfX)
        }
    }
}

//x^i
exp(3, 5) //3, 9, 27, 81, 243; 3^1 = 3; 3^2 = 9; 3^3 = 27 .......
