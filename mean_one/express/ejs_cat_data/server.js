var express = require('express');
var app = express();
const path = require('path');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { title: 'my express project' });
});

app.get('/ash', function (req, res) {
    res.render('ash');
});

app.get('/family', function (req, res) {
    res.render('family');
});

// app.get('/cars/new', function (req, res) {
//     res.render('new');
// });

app.get('/cars/new', function (request, response) {
    response.render('new', { title: 'survey form' });
});

app.get('/may', function (request, response) {
    const photoInfo = {
        // name: name,
        name: 'Maya',
        year: '2017',
        desc: 'In Playa Tamarindo'
    };
    response.render('info', { data: photoInfo });
});

app.post('/photo', function (request, response) {
    const getInput = {
        name: getInput.name,
        year: getInput.year,
        desc: getInput.desc,
        
    };
    response.render('info', { data: getInput });
});

app.get('/nic', function (request, response) {
    const photoInfo = {
        name: 'Maya',
        year: '2017',
        desc: 'In Playa Tamarindo'
    };
    response.render('info', { data: photoInfo });
});

app.get('/yoga', function (request, response) {
    const photoInfo = {
        name: 'Maya',
        year: '2017',
        desc: 'In Playa Tamarindo'
    };
    response.render('info', { data: photoInfo });
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, function () {
    console.log('listening on port 8000');
});
