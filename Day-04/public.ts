class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p = new Person("Ram");
console.log(p.name);
p.greet();
