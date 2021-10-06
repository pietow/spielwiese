obj1 = {
    prop1: 'bla1'
}

obj2 = Object.create(obj1)
obj3 = Object.create(obj2)

//2
//add to obj1 and obj3
obj1.new = 'new' //will be also be inherited
obj3.new3 = 'new3' // will not affect the parents

const log = () => {
    console.log('')
    console.log('###########LOG#######')
    console.log(obj1)
    console.log(obj2)
    console.log(obj3)
    console.log('######')
    console.log(obj1.prop1)
    console.log(obj2.prop1)
    console.log(obj3.prop1)
    console.log('######')
    console.log('######')
    console.log(obj1.new)
    console.log(obj2.new)
    console.log(obj3.new)
    console.log('######')
    console.log(obj1.new3)
    console.log(obj2.new3)
    console.log(obj3.new3)
    console.log('###########LOG#######')
    console.log('')
} 
// log()

//3
//delete prop in obj1 and obj3
// delete obj3.new //inherited props can not be deleted
// delete obj3.prop1 //inherited props can not be deleted
// log()

// delete obj1.new //deletion is pass to all ancestors
// delete obj1.prop1
// log()

//4
//obj1 inherits from ??
//inherits from Prototype
console.log(Object.prototype)

//5
//object keys: gets only the own/non-inherited properties
console.log(Object.keys(obj1))
console.log(Object.keys(obj2))
console.log(Object.keys(obj3))

//6
//for loop gives also the inherits keys
console.log('########')
for (key in obj1) {
    console.log(key)
}
console.log('########')
for (key in obj2) {
    console.log(key)
}
console.log('########')
for (key in obj3) {
    console.log(key)
}
console.log('########')
