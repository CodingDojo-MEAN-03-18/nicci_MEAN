const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose; //destructuring
const port = process.env.PORT || 8015;
const time = require('express-timestamp');
const app = express();

mongoose.connect('mongodb://localhost/books_and_authors');
mongoose.connection.on('connected', () => console.log('connect to mongodb'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));


//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(time.init);

const quoteSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        date: { type: Date, default: Date.now }
    },
    quote: {
        type: String,
        required: true,
        minlength: 10,
    },
},{
    timestamps: true,
});

const Quote = mongoose.model('Quote', quoteSchema);

//describe route handling

app.get('/', function(request, response){
    response.render('quotes/index');
});

app.get('/quotes', function(request, response){
    //using promise structure over callback
    Quote.find({})
    .then(quotes => {
        response.render('quotes/display', { quotes })
    })
    .catch(error => {
        //handle the error
        console.log(error);
    });
});
app.post('/quotes', function(request, response){
    console.log(request.body);
    
    const quote = {
        name: request.body.name,
        quote: request.body.quote,
        moment: request.body.timestamp,
    }
Quote.create(request.body)
    .then(quote => {
        console.log( 'quote', quote);
        response.redirect('/quotes');
    })    
    .catch(error => {
        console.log('error', error);
    });
});

app.listen(port, () => console.log(`express listening on ${port}`));