const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

let route = require('./routes/route')

app.use(bodyParser.json());

app.use('/app', route);

app.listen(PORT, () => {
    console.log('Server running at ' + PORT);
})