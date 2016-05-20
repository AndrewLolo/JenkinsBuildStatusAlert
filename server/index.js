'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const Bootstrap = require('./bootstrap');

const bootstrap = new Bootstrap(server);


app.use(express.static('public'));


server.listen(port, function () {
    bootstrap.start();
});