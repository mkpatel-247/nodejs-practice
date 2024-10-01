const http = require("http");
const fs = require("fs");
const router = require("router");

http.createServer((request, response) => {
    router.use(req, res, () => {

    })
}).listen(9000, () => {
    console.log(`Server Started at port number: ${port}`);
});

