//https://dmitripavlutin.com/javascript-this-interview-questions/

//1
let object = {
    message: 'Hello, World!',
    getMessage() {
        const message = 'Hello, Earth!'
        return this.message
    },
}
// console.log(object.getMessage()); // What is logged? /Hello world

//2
function Pet(name) {
    this.name = name //lexical scope of constructor function
    this.bla = 'bla'
    let blo = 'blo'
    // this.getName = () => bla
    this.getName = () => this.name
    this.getNameGlob = function() {
        // return blo
        return this.bla //global object
    }

}

const cat = new Pet('Fluffy')
// console.log(cat.getName()) // What is logged? /'Fluffy'....this is inherited from the function scope
// const { getName } = cat
// console.log(getName()) // What is logged? /'Fluffy'

// console.log(cat.getNameGlob()) // What is logged? /'Fluffy'....this is inherited from the function scope
const { getNameGlob } = cat
// console.log(getNameGlob()) // What is logged? /'Fluffy'

//3

object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message) // What is logged?
    },
}

// setTimeout(object.logMessage, 1000); //undefined

//4
object = {
  message: 'Hello, World! yeahh'
};
function logMessage() {
  console.log(this.message); // "Hello, World!"
}
// logMessage.call(object)


//5
object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  // farewell: () => {
  //   return `Goodbye, ${this.who}!`;
  // },
  farewell: () => {
    return this
  }
};
// console.log(object.greet());    // What is logged? Hello world
// console.log(object.farewell()); // What is logged? Goodbye undefined

//6
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }

// object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };

// object.method(callback, 1, 2); //4 if this/global is window; in node undefined

//7
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
object = {
  length: 5,
  method() {
      arguments[0](); //array-like object
  }
};
object.method(callback, 1, 2); //3 arguments variable is an array with length 3 and this === Array

const myFunc = function() {
    console.log(arguments)
}
// const myFunc = () => {console.log(this, 'arrow')} 
let arr = [myFunc, 1, 2]
arr[0]()
