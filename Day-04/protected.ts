class Vehicle {
  protected speed: number = 0;

  protected accelerate() {
    this.speed += 10;
  }
}

class Car extends Vehicle {
  public boost() {
    this.accelerate();
    console.log(this.speed);
  }
}

let c = new Car();
c.boost();
