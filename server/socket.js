'use strict';

module.exports = function (server) {
    let io = require('socket.io').listen(server);

    io
        .on('connection', function (socket) {
            console.log('a user connected');
            socket.on('test', (data) => {
                console.log('on test', data);
                // socket.emit('test', 'test1');
            });
        });
};