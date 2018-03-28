var express = require('express');
var app = express();


// app.HTTP_VERB('URL', function(req, res){});

app.get('/', function(req, res){
    res.send('<h1>hola!</h1>')
});

app.get('/', function (req, res){
    res.render('index', {title:'my express project'});
});

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get("/users", function (req, res) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    // passing the JS object to the response.render method
    res.render('users', { users: users_array });
})
app.post('/users', function(req, res){
    console.log("POST DATA \n\n", req.body)
    res.redirect('/')
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8000, function () {
    console.log('listening on port 8000');
});

