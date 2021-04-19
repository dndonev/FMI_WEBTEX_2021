const { Router } = require('express');
const verifyTokenMiddleware = require('../../middleware/verify-token');

const router = Router();

router.post('/token', (req, res) => {
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

router.post('/logout', verifyTokenMiddleware, (req, res) => {
	const refreshToken = req.body.token;

	refreshTokens = refreshTokens.filter(t => t !== refreshToken);

	res.sendStatus(204);
})

router.post('/user', (req, res) => {

	const username = req.body.username;
	const user = { name: username }
	/// NEED VALIDATION LOGIC - Passed!
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5s' });
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

	refreshTokens.push(refreshToken);
	res.json({ accessToken, refreshToken }).send();
})

module.exports = router;