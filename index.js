const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded());
// routing for this app
app.use('/', require('./routes'));

// setup view engine 
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', './views');


// set up db

app.listen(port, function (err) {
    if (err) {
        console.log('error while running the server', err);
        return;
    }
    console.log('codeila server is up and running on port', port);
});