const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8006;

const app = express();


mongoose.connect('mongodb://localhost/message_board');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));

// 1 message can have many comments
const messageSchema = new Schema({
  name: {
      type: String,
      required: true,
      minlength: 3,
  },
  message: {
      type: String,
      required: true,
      minlength: 3,
  },
  comments: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
      }
  ]
}, {
    timestamps: true,
});

// 1 comment belongs to 1 message
const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    comment: {
        type: String,
        required: true,
        minlength: 3,
    },
    message:{
        type: Schema.Types.ObjectId,
        ref: 'Message',
    }
}, {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/', function (request, response){
    response.render('index');
});

app.get('/messages', function(request, response){
    Message.find({})
        // .populate(comment)
        .then(messages => {
            response.render('messages/index', { messages });
        })
        .catch(error => {
            //deal with error
            console.log(error);
        })
});

app.post('/messages', function(request, response){
    console.log(request.body);
    Message.create(request.body)
        .populate(comment)
        .then(message => {
            console.log('message', message);
            response.redirect('/messages');
        })
        .catch(error => {
            console.log('error', error);
        })
});

app.post('/comments', function(request, response){
    console.log(request.body);
    Comment.create(request.body)
        .populate(message)
        .then(comment => {
            console.log('comment', comment);
            response.redirect('/messages');
        })
        .catch(error => {
            console.log('error', error);
        })
});

app.listen(port, () => console.log(`express on port ${ port }`));