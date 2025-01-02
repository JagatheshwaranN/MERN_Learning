const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "big_file.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_big_file.txt")
);

// Approach 1
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// Approach 2
rs.pipe(ws);
