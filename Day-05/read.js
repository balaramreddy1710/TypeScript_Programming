var fs = require("fs");
fs.readFile("sample.txt", "utf8", function (err, data) {
    if (err) {
        console.error("Error reading the file: " + err);
        return;
    }
    console.log("File contents:", data);
});
