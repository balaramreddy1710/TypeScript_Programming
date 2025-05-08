var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person("Ram");
// console.log(p.name);
console.log(p.getName());
