//this keyword
console.log(this)

//there are different ways to invoke a function and this is call invokation context
//1. version of an invokation
//function invokation and if we us this, "this" is the global object; in node the global object is called global object and in the browser it is called window oject
const myFunc = function () {
    return this
}

let result = myFunc() //here we invoke the function myFunc
console.log(result)

//
const obje = {
    fname: 'john',
    getName: function () {
        return this
    },
}
console.log()
console.log('#########################')
console.log()

//2. version of an invokation
//method invokation
result = obje.getName()
console.log(result)
console.log()
console.log('#########################')
console.log()

const getNameOutside = obje.getName
//function invokation
result = getNameOutside()
console.log(result)

//3. version of an invokation
//constructor invokation
const user = function (fname, lname) {
    this.fname = fname
    this.lname = lname
    // this.innerFun = function() {
    //     return this
    // }
}

user.prototype.innerFun = function () {
    return this
}

//3. version of an invokation
//constructor invokation
john = new user('John', 'Doe')
result = john.innerFun()
console.log()
console.log('#########################')
console.log()
console.log(result)
console.log()
console.log('#########################')
console.log()
console.log(Object.getPrototypeOf(john))
console.log(Object.getPrototypeOf(Math.max))

const animal = function(name, legs) {
    this.name = name
    this.legs = legs
    this.getLegs = function() {
        return this
    }
}

let cat = new animal('bob', 3)
// console.log(cat)

// animal.prototype.getLegs = function() {
//     return 'bla'
// }

console.log()
console.log('########')
console.log('')
//what kind of invokation?
// console.log(cat.getLegs())
console.log(cat)
console.log('########')

//function invokation---> so this is the global object 
let funcInvo = cat.getLegs
console.log(funcInvo())

//4. indirect invokation of a function with bind or call or apply

john = {
    fname: 'John',
    myFun: function() {
        console.log(this)
    }
}


//method invocation; this === john object
// john.myFun() 


//function invokation; this === global object
const outerFunc = function() {
    console.log(this)
}
console.log('#################')
console.log('#################')

outerFunc()

console.log('#################')
console.log('#################')

//4. version of invokation
//indirect invokation: this changes from the global object to the john object
outerFunc.call(john)

const nowInnerFun = outerFunc.bind(john)
console.log('#################')
console.log('#################')
console.log('#################')
console.log('#################')
nowInnerFun()











































