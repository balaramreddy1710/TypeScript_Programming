var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getContent());
var stringBox = new Box("Hello");
console.log(stringBox.getContent());
