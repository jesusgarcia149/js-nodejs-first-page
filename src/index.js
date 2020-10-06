const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
/*
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index');
});
*/
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
/*
app.listen(3000, () => {
    console.log('Server on Port ', 3000);
});
*/
app.listen(app.set('port'), () => {
    console.log('Server on Port ', app.set('port'));
});