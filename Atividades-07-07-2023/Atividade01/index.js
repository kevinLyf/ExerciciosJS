const fs = require("fs");

fs.readFile("./file.txt", (error, data) => {
    if(error) throw error;

    console.log(data.toString());
});
