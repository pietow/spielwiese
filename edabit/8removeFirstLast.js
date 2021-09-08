// const removeFirstLast = str => str.length === 1 ? str : str.slice(1, str.length - 1)
function removeFirstLast(str) {
    let newStr = []
    if (str.length > 2) {
        for (let i = 1; i <= str.length - 2; i++) {
            newStr[i] = str[i]
        }
        return newStr.join(''g
    }
    return str
}

let result
result = removeFirstLast('hello')
console.log(result)
result = removeFirstLast('maybe')
console.log(result)
result = removeFirstLast('benefit')
console.log(result)
result = removeFirstLast('a')
console.log(result)
result = removeFirstLast('aa')
console.log(result)
