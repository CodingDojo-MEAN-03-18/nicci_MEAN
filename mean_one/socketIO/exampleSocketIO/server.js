const express = require( 'express');
const path = require( 'path');

const app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
})
const server = app.listen(8765, function(){
    console.log('listening on port 8765');
});
const io =  require('socket.io').listen(server);
//set up connection event below
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
})
