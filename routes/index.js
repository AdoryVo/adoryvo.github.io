/* ---------- MODULES ---------- */
const express = require('express');
const fs = require('fs');

/* ---------- CUSTOM MODULES ---------- */

/* ---------- CONSTANTS ---------- */
const router = express.Router();

/* ---------- FUNCTIONS  ---------- */

/* ---------- ROUTES ---------- */
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/music', (req, res) => {
    res.render('music');
});

router.get('/projects', (req, res) => {
    res.render('projects/index');
});

router.get('/projects/:page', (req, res) => {
    const path = `projects/${req.params.page}`;

    try {
        if (fs.existsSync(`views/${path}.ejs`)) {
            res.render(path);
        }
        else {
            res.status(404);
            res.render('404');
        }
    } catch(err) {
        res.status(404);
        res.render('404');
    }
});

module.exports = router;