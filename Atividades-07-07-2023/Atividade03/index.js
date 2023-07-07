const fs = require("fs");

fs.appendFile("./file.txt", "Hello, \n", (error) => {
    if(error) throw error;
});