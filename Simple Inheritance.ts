class Vehicle {
    honk(): void{
        console.log("Beep")
    }

}
class Car extends Vehicle{

}

const car = new Car();
car.honk();
