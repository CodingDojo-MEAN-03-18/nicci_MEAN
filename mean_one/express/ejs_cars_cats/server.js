var express = require('express');
var app = express();
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

app.get('/cars/new', function (req, res) {
    res.render('new');
});

app.post('/cars/new', function (req, res) {
    console.log("POST DATA \n\n", req.body)
    res.redirect('/')
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, function () {
    console.log('listening on port 8000');
});
