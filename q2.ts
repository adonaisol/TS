class Car{

    name: string;

    acceleration:number = 0;
constructor(name: string) {   this.name = name;}
honk() {
        console.log(`${this.name} is saying :Tooooo`);
}
    accelrator(speed:number) {
        this.acceleration = this.acceleration + speed;
}}
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelrator(60);
console.log(car.acceleration);