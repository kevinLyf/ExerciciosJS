const fs = require("fs");

fs.readFile("./file.txt", (error, data) => {
  if (error) throw error;

  fs.writeFile("./newFile.txt", data, (error) => {
  });
});
