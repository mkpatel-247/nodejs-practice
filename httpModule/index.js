const http = require("http");
const fs = require("fs");
const moment = require("moment");

const myServer = http.createServer((request, response) => {
  const log = `${moment(Date.now()).format(
    "DD/MM/YYYY HH:mm"
  )}: Served request.\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    console.count("Get the request and it serve successfully..", data);
    response.end("Request Serve.");
  });
});

myServer.listen(3000, () => {
  console.log("Server started...");
});
