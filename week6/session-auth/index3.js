const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const app = express();

app.use(cookieParser())
app.use(express.json())

app.use(session({
	secret: 'my-secret',
	resave: false,
	saveUninitialized: false
}))


app.post('/register', (req, res) => {
	const { user } = req.body;
	if (!user) {
		return res.sendStatus(400);
	}
	req.session.user = user;
	res.status(200).send()
})

app.get('/private', (req, res) => {

	if (!req.session.user.username === 'dobrin123' && !req.session.user.password === 'not123') {
		return res.sendStatus(401);
	}
	res.send('private')
})

app.get('/logout', (req, res) => {

	req.session.destroy();
	res.send('logged out')
})

app.listen(3000, () => {
	console.log('Listening on 3000')
})