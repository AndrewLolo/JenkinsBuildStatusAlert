'use strict';

module.exports = function (server) {
    let io = require('socket.io').listen(server);

    io
        .on('connection', function (socket) {
            socket.on('updateJob', (data) => {
                console.log('on test', data);
            });
        });
};