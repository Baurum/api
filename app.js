const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const usersRouter = require('./routes/users');
const sessionsRouter = require('./routes/sessions');
const timeRegistriesRouter = require('./routes/time-registries');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Connecting to db
mongoose.connect('mongodb://heroku_n8dspjgv:f9q8bb17drdt1pt5lhfvko49c5@ds243518.mlab.com:43518/heroku_n8dspjgv')
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))
;
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/time-registries', timeRegistriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
