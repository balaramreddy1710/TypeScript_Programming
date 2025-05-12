class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent());
