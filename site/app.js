var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./user.route');
const glassRouter = require('./glass.route');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');



var app = express();
app.use(express.static('pages/'));
const port = 3002;




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', userRouter);
app.use('/glass', glassRouter);
app.use('/image', express.static('./public/images'))


app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



// replace the uri string with your connection string.

const uri = "mongodb+srv://adele:jSJ9V8okBvF3kFFu@cluster017.mz88j.mongodb.net/test?retryWrites=true;";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});



module.exports = app;