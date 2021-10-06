//part of the global object
// setTimeout( () => console.log('howdey'), 2000  )

function makeTalk(animal) {
    const noises = {
        cat: 'purr',
        dog: 'woof',
        cow: 'moo',
        pig: 'oink',
    }
    console.log(`A ${animal} goes ${noises[animal]}.`)
}

function getRandow(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

const animals = ['cat', 'dog', 'cow', 'pig']
const randomAnimal = getRandow(animals)

// setTimeout(() => makeTalk(randomAnimal), 2000)

// console.log(1)
// setTimeout( () => {console.log(2)}, 0); //asynchronous
// console.log(3)


const myFunc = function() {
    console.log(this.bla)
}

const obje = {
    bla: 'bla2',
    myblaFunction: myFunc
}

obje.myblaFunction()
console.log(obje['myblaFunction'])
