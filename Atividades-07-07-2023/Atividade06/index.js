const fs = require("fs");

fs.rm("./file.txt", (error) => {
    if(error) throw error;
});