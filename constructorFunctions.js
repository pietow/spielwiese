//1
const user = function (name, isAdmin) {
    // this.name = name
    this.isAdmin = isAdmin
    //4
    // this.getUserInfo = function () {
    //     if (this.isAdmin) return ` ${this.name} is an admin`
    //     return ` ${this.name} is not an admin`
    // }
}

//4
user.prototype.getUserInfo = function () {
    if (this.isAdmin) return ` ${this.name} is an admin`
    return ` ${this.name} is not an admin`
}

user.prototype.name = 'Bla'

const jack = new user('Jacke', false)
// console.log(jack)

//2
const bob = new user('Bob', false)
const john = new user('John', false)

//3
const user2 = function (name, isAdmin) {
    this.name = name
    this.isAdmin = isAdmin
    return //returns object with assigned properties
    return 1 //same here
    return { name: 'Godzilla' } // assigned properties are ignored; {name: 'Godzilla'} is returned
}

const god = new user2('God', true)
// console.log(god)




//4

console.log(jack)
console.log(jack.getUserInfo())
