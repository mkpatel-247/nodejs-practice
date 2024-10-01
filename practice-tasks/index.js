const http = require("http");
const fs = require("fs");
const router = require("router")();
const bodyParser = require("body-parser");
const port = 9000;


router.use(bodyParser.json());

http.createServer((request, response) => {
    router(request, response, () => {
        // console.log(res.headers)
    });
}).listen(port, () => {
    console.log(`Server Started at port number: ${port}`);
});

router.get('/', (req, res) => {
    try {
        const buf_data = fs.readFileSync('./data.json');
        const dataJson = JSON.parse(buf_data.toString());
        dataJson.push({ id: 5, name: "naman" }, { id: 6, name: "sunil1212" });
        fs.writeFileSync('./data.json', JSON.stringify(dataJson));
        console.log(typeof dataJson);
        return res.end("Got you request....");
    } catch {
        return res.end("Not working....");
    }
})