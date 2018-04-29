const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8765;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

require('./server/config/database');
// require('./server/config/routes')(app);
app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`express listening on ${ port }`));