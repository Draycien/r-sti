var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/cars', carRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});