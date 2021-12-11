const express = require('express');
const keepAwake = require('./keepAwake');
const app = express();

const appsList = [
	'https://hitesh-mandav.herokuapp.com/',
	'https://charts-dashboard.herokuapp.com/',
];

app.get('/', (req, res) => {
	res.status(200).send('Keep alive  server is running').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
	appsList.forEach((url) => keepAwake(url));
});
