const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const app = express();

app.use(express.json())


app.post('/user', (req, res) => {

	const username = req.body.username;
	const user = { name: username }

	const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

	res.json({ accessToken: token }).send();
})

app.get('/posts', verifyToken, (req, res) => {
	const post = {
		title: 'New post',
		iat: new Date().getTime()
	}

	res.json(post).status(200).send();
})

app.listen(4000, () => console.log('listening'))

function verifyToken(req, res, next) {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ').pop();
	if (!token) {
		return res.sendStatus(401);
	}

	const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	if (!user) {
		return res.sendStatus(403);
	}

	req.user = user;
	next();
}