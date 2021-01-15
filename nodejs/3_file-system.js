var fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
console.log("end.");

// var data = fs.readFileSync("a.txt", "utf-8");
// console.log(data);
