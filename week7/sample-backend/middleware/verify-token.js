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

module.exports = verifyTokenMiddleware;