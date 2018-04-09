// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var mongoose = require('mongoose'); //1
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/basic_mongoose_app'); //2
// Require path
var path = require('path');
const UserSchema = new mongoose.Schema({ //3
    name: String,
    age: Number
})
//4 (below)
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
const User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

//plug in your own promise library
//use bluebird
// mongoose.Promise = require('bluebird');
// assert.equal(query.exec().constructor, require('bluebird'));

// //use q. note that you **must** use `require('q').Promise`.
// mongoose.Promise = require('q').Promise;
// assert.ok(query.exec() instanceof require('q').makePromise);
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function (req, res) {  //5?
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // create user
    const user = new User({name: req.body.name, age: req.body.age});
  // save new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err){ //.save is a method that inserts into DB.
      //if error console.log error
    if(err){
        console.log('something went wrong');
    } else { 
        console.log('user added');
        res.redirect('/');
    }
  })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
