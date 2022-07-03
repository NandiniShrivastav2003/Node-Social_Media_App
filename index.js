const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 5000;
const db = require('./config/mongoose');
// const User = require('./models/users');
//used for authentication in passport library
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport');
const mongoose = require('mongoose');


const sassMiddleWare = require('node-sass-middleware');
app.use(sassMiddleWare({
 src: './assests/scss',
    dest: './assests/css',
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use(express.static('./assests'))
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

//use express router

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'CodeWeb',
    //TODo change the secret in  deployment mode
    secret: 'blahsomething',
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));
app.listen(port, function (err) {
    if (err) {
        console.log('Error:', err);

    }
    console.log(`server is started at port : ${port}`);
    console.log(`http://localhost:${port}`)
})