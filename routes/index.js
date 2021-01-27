/* ---------- MODULES ---------- */
const express = require('express');
const fs = require('fs');

/* ---------- CUSTOM MODULES ---------- */

/* ---------- CONSTANTS ---------- */
const router = express.Router();

/* ---------- FUNCTIONS  ---------- */

/* ---------- ROUTES ---------- */
router.get('/', (req, res) => {
    res.render('../views/index.ejs');
});

router.get('/about', (req, res) => {
    res.render('../views/about.ejs');
});

router.get('/contact', (req, res) => {
    res.render('../views/contact.ejs');
});

router.get('/error', (req, res) => {
    res.render('../views/404.ejs');
});

router.get('/music', (req, res) => {
    res.render('../views/music.ejs');
});

router.get('/projects', (req, res) => {
    res.render('../views/projects/index.ejs');
});

router.get('/projects/:page', (req, res) => {
    const path = `../views/projects/${req.params.page}.ejs`;
    console.log(path);

    try {
        if (fs.existsSync(path)) {
            res.render(path);
        }
        else {
            res.redirect('/error');
        }
    } catch(err) {
        res.redirect('/error');
    }
});

/* ---------- METADATA ROUTES ---------- */
router.get('/manifest.json', (req, res) => {
    res.send('');
});

module.exports = router;