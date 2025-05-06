var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect;
}());
var r1 = new Rect(10, 20);
console.log(r1.getArea());
