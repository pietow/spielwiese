function unique(x) {
    // let a = x[0];
    // for(let i = 0; i < x.length; i++) {
    //     if (a === x[i]) {
    //         return a;
    //     } else {
    //         a = x[0+1];
    //     }
    // }
    let arr = []
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (x[i] === x[i + j + 1]) { //compare every element with every element
                arr.push(x[i])   //get  not unique values
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < x.length ; j++) {
            if (arr[i] === x[j]) {  //arr contains only not unique values
                x.splice(j, 1)     //cut out elements, which are not unique
            }
            
        }
    }
    return x;
}


let result;
result = unique([3, 3, 3, 7, 3, 3]) 
console.log(result)
result = unique([0, 0, 0.77, 0, 0])
console.log(result)
result = unique([0, 1, 1, 1, 1, 1, 1, 1])
console.log(result)
result = unique([0, 1, 0, 1, 1, 1, 1, 1])
console.log(result)
result = unique([1, 2, 3, 4, 4])
console.log(result)
