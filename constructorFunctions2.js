//1
const Vehicle = function(type, speed) {
    this.type = type
    this.speed = speed
}

const car = new Vehicle('car', 80)
//2
console.log(car)

//3
Vehicle.prototype.move = function() {
    console.log(`I am a ${this.type}, and I am moving at ${this.speed} miles per hour`)
}

car.move()
const bus = new Vehicle('bus', 120)
const truck = new Vehicle('truck', 200)
console.log(bus)
bus.move()
console.log(truck)
truck.move()
