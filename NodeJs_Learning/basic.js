console.log("Welcome to Node Js Learning Program");
// console.log(global);

console.log("===========================================");
console.log(__dirname);
console.log(__filename);
console.log("===========================================");
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log("===========================================");
const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log("===========================================");

// Approach 1S
const math = require("./math");
console.log(math.add(2, 3));
console.log(math.sub(5, 3));
console.log(math.mul(3, 3));
console.log(math.div(10, 2));
console.log("===========================================");
// Approach 2 - Destructuring
const { add, sub, mul, div } = require("./math");
console.log(add(2, 3));
console.log(sub(5, 3));
console.log(mul(3, 3));
console.log(div(10, 2));
console.log("===========================================");
