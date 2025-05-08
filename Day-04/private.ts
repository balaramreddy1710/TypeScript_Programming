class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

let p = new Person("Ram");

// console.log(p.name);
console.log(p.getName());
