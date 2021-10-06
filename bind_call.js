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


































