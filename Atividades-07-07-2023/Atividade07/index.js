const fs = require("fs");

fs.readFile("./file.tx", (error, data) => {
  if (error) return console.log("O arquivo não existe");

  console.log("O arquivo existe");
});
