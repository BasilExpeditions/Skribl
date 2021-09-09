const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log(req)
})

const server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log(server.address())

    console.log('Example app listening at http://locatlhost:3000', host, port)
})