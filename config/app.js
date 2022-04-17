let cors = require('cors');
let createError = require('http-errors');
let express = require('express');
let logger = require('morgan');
let passport = require('passport');
let compression = require('compression');

let errorHandler = require('./error-handler');

// Get the route modules
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let incidentRouter = require('../routes/incident');

let app = express();

// Enable cors
app.use(cors());
app.options('*', cors());

// compress all responses
app.use(compression());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Sets up passport
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/incident', incidentRouter);

// error handler
app.use(errorHandler);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // next(createError(404));
    res.status(404).json({
        statusCode: 404,
        message: "The endpoint does not exist."
    });
});

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;