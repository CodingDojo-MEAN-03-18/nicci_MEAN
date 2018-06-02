const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, "static")));

const server = app.listen(port, () => console.log(`listening on port ${port}`));
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function (socket) { //2

});