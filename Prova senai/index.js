const http = require("http");
const os = require("os");
const url = require("url");
const fs = require("fs");
const path = require("path");
const PORT = 8080;

// 1)
// const server = http.createServer((req, res) => {
//   if (req.url === "/info") {
//     res.setHeader("Content-Type", "application/json");

//     const info = {
//       systemName: os.hostname(),
//       freeMemory: os.freemem(),
//       serverPath: os.homedir(),
//     };

//     res.write(JSON.stringify(info));
//     return res.end();
//   }

//   res.end();
// });
// server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// 2)
// const link = "https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf";
// const object = path.parse(link);
// console.log(object);

// 3)
// const link = "https://nodejs.org/api/url.html#url_new_url_input_base";
// const urlInfo = url.parse(link, true);
// console.log(urlInfo);

// 4)
// fs.rename("oldFile.txt", "newFile.txt", (err) => {
//   if (err) throw console.log(err);
//   console.log("Arquivo renomeado!");
// });

// 5)
// const cpus = os.cpus();
// console.log(cpus);
