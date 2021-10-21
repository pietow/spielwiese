let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];

const convertArraysToObject = (cities, areas) => cities.reduce( (acc, b, index) => {
    acc[b] = areas[index]
    return acc
}, {})  

console.log(convertArraysToObject(cities, areas));

const twodig = str => Object.keys(str.split('').reduce( (acc, b) => {
    acc[b] = b;
    return acc
}, {}  ) ).length > 1
console.log(twodig('2222'))
