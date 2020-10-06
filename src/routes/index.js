const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.render('index');
    res.render('index.html');
});
router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.render('contact');
    res.render('contact.html');
});

module.exports = router;