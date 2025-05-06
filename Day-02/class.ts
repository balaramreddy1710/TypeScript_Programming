class Person {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  //   public setName(name: string) {
  //     this.name = name
  //   }
}

const person = new Person("Jane");
console.log(person.getName());
