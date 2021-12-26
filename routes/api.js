/* ---------- MODULES ---------- */
const express = require('express');
const got = require('got');

/* ---------- CUSTOM MODULES ---------- */

/* ---------- CONSTANTS ---------- */
const router = express.Router();
const authOptions = {
	headers: {
		Authorization:
			'Basic ' +
			Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
	},
	form: {
		grant_type: 'client_credentials',
	},
};

/* ---------- FUNCTIONS  ---------- */

/* ---------- ROUTES ---------- */
router.get('/token', async (req, res) => {
	const response = await got.post('https://accounts.spotify.com/api/token', authOptions).json();

	res.send(response['access_token']);
});

module.exports = router;
