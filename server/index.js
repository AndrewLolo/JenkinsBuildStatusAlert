'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    port = 3000,
    Bootstrap = require('./bootstrap');

app.use(express.static('public'));

new Bootstrap(server);

server.listen(port, function () {
    console.log('Server started on port: ' + port);
});