//partially initialized
var direction;
(function (direction) {
    direction[direction["North"] = 1] = "North";
    direction[direction["East"] = 2] = "East";
    direction[direction["South"] = 3] = "South";
    direction[direction["West"] = 4] = "West";
})(direction || (direction = {}));
console.log(direction.West);
//fully initialized
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Error"] = 404] = "Error";
    statusCode[statusCode["Completed"] = 200] = "Completed";
    statusCode[statusCode["Bad_Request"] = 400] = "Bad_Request";
})(statusCode || (statusCode = {}));
console.log(statusCode.Completed);
