interface Shape {
  getArea: () => number;
}

class Rect implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const r1 = new Rect(10, 20);
console.log(r1.getArea());
