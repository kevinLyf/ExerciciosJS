const fs = require("fs");

fs.rename("./oldFile.txt", "./newFile.txt", (error) => {
  if (error) throw error;
});
