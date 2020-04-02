const bodyParser = require('body-parser');
const express = require('express');
const Util = require('./util.js');
require('dotenv').config();

// express
const app = new express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    // UiPath実行
    await Util.sendRPA(req.body.message);
    res.send('POST request OK!');
});

// run express server
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});