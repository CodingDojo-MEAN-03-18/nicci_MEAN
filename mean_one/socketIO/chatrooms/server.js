const parser = require('body-parser');
const session = require('express-session');
const express = require('express');
const path = require('path');
const app = express();
app.use(session({secret: 'kids rock'}));
app.use(parser.urlencoded({extended: true}));

const port = process.env.PORT || 8787;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => console.log(`listening on port ${ port }`));
const io = require('socket.io')(server);

app.get('/', function(req, res){
    res.render('index');
});

io.on('connection', socket => {
    console.log('incoming socket connection');
    socket.on ('getUser', function newUser() {
        var txt;
        var person = prompt("Please Enter Your Name to Enter Site. ", "Name Here.");
        if (person == null || person == '') {
            txt = "User cancelled.";
        } else {
            txt = "hello" + person + "! You have entered the site."
        }
        document.getElementById('user').innerHTML = txt;
    });
});

//with any of my routes, I now have access to the object called req.session
// app.use(session({
//     secret: 'maya ashton oliver ray',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }));

app.post('/', function(req, res){
    req.session.name = req.body.name;
    console.log(req.session.name);
    // console.log(newUser);
    res.redirect('/');
});
