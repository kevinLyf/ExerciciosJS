const fs = require("fs");

fs.writeFile("./file", "Hello, World!", (error) => {
    if(error) throw error;
});