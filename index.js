const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// set up db
const db = require('./config/mongoose');

// cookie related stuff's 
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const mongoConnect = require('connect-mongo');

app.use(express.urlencoded());
app.use(cookieParser());



// setup view engine 
// const EJSLayout = require('express-ejs-layouts');
// app.use(EJSLayout);
app.set("layout extractScripts", true)
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    secret: 'blahsomething', // encryption secret key
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100) // should be in millisec
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/codeial_db',
        autoRemove: 'disabled'
    })
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// routing for this app
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log('error while running the server', err);
        return;
    }
    console.log('codeila server is up and running on port', port);
});