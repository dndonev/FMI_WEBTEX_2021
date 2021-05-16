
import express, { Application } from 'express'; // === const express = require('express');
import { config } from 'dotenv'
import { connect } from 'mongoose'
import fileUpload from 'express-fileupload';

import { connect as connectAPI } from './api/connect'; // const {a} = {a: 5}

config(); //{ path: __dirname + '/.env' }

const app: Application = express();

app.use(express.json());
app.use(fileUpload());

connectAPI(app, '/api');

app.listen(process.env.PORT, () => {
	connect(process.env.DB_CONNECTION_STRING)
		.then(() => console.log('Server and DB initiated, up and running'))
		.catch((err: Error) => console.log(err))
});