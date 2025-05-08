const fs = require("fs");

let content = "Hi Ram";
fs.writeFile("sample.txt", content, (err, data) => {
  if (err) {
    console.log("Error writing file" + err);
    return;
  }
  console.log("Successfully written in file");
});

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file" + err);
    return;
  }
  console.log("File contents " + data);
});
