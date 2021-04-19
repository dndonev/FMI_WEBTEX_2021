fetch('http://localhost:3000/posts', {
	body: {
		username: 'Dobrin123',
		password: 'not123'
	}
}).then(res => {
	///action based on your response
}).catch(err => {
	if (err.statusCode == 403) {
		//redirect to login
	}
})