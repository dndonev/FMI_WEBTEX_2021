
import express, { Application } from 'express'; // === const express = require('express');
import { config } from 'dotenv'
import { connect } from './api/connect'; // const {a} = {a: 5}

config({ path: __dirname + '/.env' });

const app: Application = express();

connect(app, '/api');

app.listen(process.env.PORT, () => console.log(`$Server listening`));

// javascript
// typescrypt = javascript + types = new language