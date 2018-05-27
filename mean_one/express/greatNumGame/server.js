const express = require('express');
const session = require('express-session');
const app = express();
const parser = require('body-parser');
app.use(session({secret: 'Oliver Maya Ashton'}));
app.use(parser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

var msg = '';
var num = Math.floor(Math.random() * 100) + 1;

app.get('/', function(request, response){
    request.session.num = num;
    console.log('num: ' + request.session.num);
    response.render('index', {data: num});
});

app.post('/', function(request, response){
    number = parseInt(request.body.number);
    console.log(request.body.number);
    if (number === num){
        msg = "You guessed it!";
        color = "green";
        num = Math.floor(Math.random() * 100) + 1;
        response.render('guess', { data: number, num, msg, color });
    } else if(number < num) {
        msg = `TOO LOW!  You didn't guess it this time, but give it another whril. `;
        color = "red";
        response.render('guess', { data: number, num, msg, color });
    } else if(number > num) {
        msg = `TOO HIGH!  You didn't guess it this time, but give it another whril.`;
        color = "red";
        response.render('guess', {data: number, num, msg, color});
    }
});

app.listen(8787, function(){
    console.log('leveraging port 8787');
})