/* ---------- MODULES ---------- */
const compression = require('compression');
const dotenv = require('dotenv');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

/* ---------- CUSTOM MODULES ---------- */

/* ---------- CONSTANTS ---------- */
const app = express();
const DOTENV_RESULT = dotenv.config();
const port = process.env.PORT || 3000;

/* ---------- FUNCTIONS ---------- */

/* ---------- INITIALIZATION ---------- */

/* ----- Dotenv ----- */
if (DOTENV_RESULT.error) {
	console.error(`${DOTENV_RESULT.error}`); // Create a .env file to stop this error.
}

/* ----- Express ----- */
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // url path begins at /public

// Middleware
app.use(compression());
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); // go to http://localhost:3000/images/favicon.ico to refresh icon

// updatePackages() // For updating jQuery and Bootstrap CSS and JS files

/* ---------- ROUTES ---------- */
app.use('/', require('./routes/index.js'));
app.use('/api', require('./routes/api.js'));
app.use((req, res) => {
	res.status(404);

	res.format({
		html: () => {
			res.render('404');
		},
		json: function () {
			res.json({ error: 'Not found' });
		},
		default: function () {
			res.type('txt').send('Not found');
		},
	});
});

/* ---------- LAUNCH ---------- */
app.listen(port, () => console.log(`Server running at http://localhost:${port}/\n`));
