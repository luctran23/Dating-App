require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
var cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log('Connected to DB')});

const girlRoute = require('./routes/girl.route');

app.use(bodyParser.json());
app.use(cors())
// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
});
// IMPORT ROUTER
app.use('/girls', girlRoute);

//Start listening to the server
app.listen(port, () => {
    console.log(`Dating app listening at http://localhost:${port}`)
});