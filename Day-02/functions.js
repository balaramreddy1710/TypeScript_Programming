// Normal function
function greet(name) {
    return "Hello, ".concat(name);
}
var message = greet("Alice");
console.log(message);
//optional parameter
function greet1(name) {
    return "Hello, ".concat(name || "Guest");
}
console.log(greet1());
//default parameter
function greet2(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name);
}
console.log(greet2());
//void
function log(msg) {
    console.log(msg);
}
log("Hi");
