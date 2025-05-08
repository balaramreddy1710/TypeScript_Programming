function frozen(target: Function) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}

@frozen
class User {
  public username: string;

  public addressLine1: string = "";
  public addressLine2: string = "";
  public country: string = "";

  constructor(username: string) {
    this.username = username;
  }
}

const p = new User("exampleUser");
console.log(Object.isFrozen(User));
// User.addNewProp = "Trying to add new prop value";
console.log(Object.isFrozen(new User("example")));
