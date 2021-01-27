/* ---------- MODULES ---------- */
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

/* ---------- CUSTOM MODULES ---------- */


/* ---------- CONSTANTS ---------- */
const app = express();
const port = 3000;

/* ---------- FUNCTIONS ---------- */

/* ---------- INITIALIZATION ---------- */
/* ----- Dotenv ----- */

/* ----- Express ----- */
app.use(express.static(path.join(__dirname, 'dist'))); // url path begins at /dist
app.use(favicon(path.join(__dirname, 'dist', 'images', 'favicon.ico'))); // go to http://localhost:3000/images/favicon.ico to refresh icon

// updatePackages() // For updating jQuery and Bootstrap CSS and JS files

/* ---------- ROUTES ---------- */
app.use('/', require('./routes/index.js'));
app.use((req, res, next) => {
    res.status(404);

    res.format({
        html: () => {
            res.redirect('/error');
        },
        json: function () {
            res.json({error: 'Not found'})
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
});

/* ---------- LAUNCH ---------- */
app.listen(port, () => console.log(`Server running at http://localhost:${port}/\n`));