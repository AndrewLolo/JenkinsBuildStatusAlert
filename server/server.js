'use strict';

const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    port = 3000;

app.use(express.static('public'));

require('./socket')(server);

server.listen(port, function () {
    console.log('Server started on port: ' + port);
});