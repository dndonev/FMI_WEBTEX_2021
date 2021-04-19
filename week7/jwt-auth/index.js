const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: __dirname + '/.env' })

const app = express();

let refreshTokens = [];

app.use(express.json())

app.post('/token', (req, res) => {
	const refreshToken = req.body.token;

	if (!refreshToken) {
		return res.status(400).send('Token unavailable'); // 400: Bad Request!
	}

	try {
		user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,);

		if (!accessToken) {
			return res.sendStatus(403);
		}

		return res.status(200).json({ accessToken }).send();
	} catch (err) {
		return res.status(403).json(err).send(); // 403: Forbidden!!
	}
});

app.post('/logout', (req, res) => {
	const refreshToken = req.body.token;

	refreshTokens = refreshTokens.filter(t => t !== refreshToken);

	res.sendStatus(204);
})

app.post('/user', (req, res) => {

	const username = req.body.username;
	const user = { name: username }
	/// NEED VALIDATION LOGIC - Passed!
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5s' });
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

	refreshTokens.push(refreshToken);
	res.json({ accessToken, refreshToken }).send();
})

app.get('/posts/:email', verifyTokenMiddleware, (req, res) => {
	const post = {
		title: 'New post',
		iat: new Date().getTime()
	}

	res.json(post).status(200).send();
})



app.listen(3000, () => console.log('listening'))

function verifyTokenMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ').pop();
	if (!token) {
		return res.sendStatus(401);
	}

	let user;
	try {
		user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	} catch (err) {
		return res.status(403).json(err).send(); // 403: Forbidden!!
	}
	if (!user) {
		return res.sendStatus(403);
	}

	req.user = user;
	next();
}
