const express = require('express');
require('dotenv').config({ path: __dirname + '/.env' })

const connect = require('./api/connect')
const app = express();

connect(app, '/api');

app.listen(process.env.PORT, () => console.log(`$Server listening`));