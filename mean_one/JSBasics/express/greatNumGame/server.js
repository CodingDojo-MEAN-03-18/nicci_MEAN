const express = require('express');
const session = require('express-session');
const app = express();
const parser = require('body-parser');
app.use(session({secret: 'Oliver Maya Ashton'}));
app.use(parser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    const num = Math.floor(Math.random() * 100) + 1;
    request.session.num = num;
    console.log(request.session.num);
    response.render('index', {title: 'great number game'});
});

app.post('/', function(request, response){
    const formData = {
        userNumber: request.body.number
    }; 
    if(num === number){
        console.log ('match')    
    }
    if (num < userNumber){
        console.log('too low');
    }
    if(num > userNumber){
        console.log('too high');
    }
    response.render('index', {data: formData});
});

app.listen(8787, function(){
    console.log('leveraging port 8787');
})