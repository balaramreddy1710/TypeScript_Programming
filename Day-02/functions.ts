// Normal function
function greet(name: string): string {
  return `Hello, ${name}`;
}

const message = greet("Alice");
console.log(message);

//optional parameter
function greet1(name?: string): string {
  return `Hello, ${name || "Guest"}`;
}
console.log(greet1());

//default parameter
function greet2(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet2());

//void
function log(msg: string): void {
  console.log(msg);
}

log("Hi");
