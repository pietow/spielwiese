//1 volume
const volumeOfBox = sizes => sizes.width * sizes.length * sizes.height

// console.log(volumeOfBox({width: 2, length: 5, height: 1}))
// console.log(volumeOfBox({width: 4, length: 2, height: 2}))
// console.log(volumeOfBox({width: 2, length: 3, height: 5}))

//2 city
const cityFacts = city =>
    ` ${city.name} has a population of ${city.population} and is situated in ${city.continent}`

// console.log(
//     cityFacts({
//         name: 'Paris',
//         population: '2,140,526',
//         continent: 'Europe',
//     })
// )

//3 key
const hasKey = (obj, str) => str in obj

// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"))
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"))
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"))

//4 profit
const profit = prices =>
    Math.round((prices.sellPrice - prices.costPrice) * prices.inventory)

// console.log(
//     profit({
//         costPrice: 32.67,
//         sellPrice: 45.0,
//         inventory: 1200,
//     })
// )
// console.log(
//     profit({
//         costPrice: 225.89,
//         sellPrice: 550.0,
//         inventory: 100,
//     })
// )
// console.log(
//     profit({
//         costPrice: 2.77,
//         sellPrice: 7.95,
//         inventory: 8500,
//     })
// )

//5 weight
let planets = {
    Earth: { gravi: 9.81 },
    Mars: { gravi: 3.711 },
    Jupiter: { gravi: 24.79 },
    Neptune: { gravi: 11.15 },
}
const spaceWeights = (strA, mass, strB) =>
    parseFloat((mass / planets[strA].gravi) * planets[strB].gravi).toFixed(2) //toFixed returns a string

// console.log(spaceWeights("Earth", 1, "Mars"))
// console.log(spaceWeights("Earth", 1, "Jupiter"))
// console.log(spaceWeights("Earth", 1, "Neptune"))

//6 greetings
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

const greeting = str => `Hi! I'm ${str} ${ str in GUEST_LIST  ? 'from ' + GUEST_LIST[str] : 'a guest'}` 

// console.log(greeting("Randy"))
// console.log(greeting("Sam"))
// console.log(greeting("Monti"))

