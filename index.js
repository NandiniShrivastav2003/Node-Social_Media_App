const express = require('express');
const cookieParser=require('cookie-parser')
const app = express();
const port = 5000;
const db = require('./config/mongoose');
// const User = require('./models/users');
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser());

//use express router
app.use('/', require('./routes'));
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) {
        console.log('Error:', err);

    }
    console.log(`server is started at port : ${port}`);
    console.log(`http://localhost:${port}`)
})