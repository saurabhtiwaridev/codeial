const express = require('express');
const app = express();
const port = 8000;





app.listen(port, function (err) {
    if (err) {
        console.log('error while running the server', err);
        return;
    }
    console.log('codeila server is up and running on port', port);
});