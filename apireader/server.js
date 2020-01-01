const express = require('express');

const bodyParser = require('body-parser');
//connect database mongoDB
const db = require('./utils/db');

var app = express();



const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));

app.get('/', (req, res) => {
    res.send('API server for reader');
});