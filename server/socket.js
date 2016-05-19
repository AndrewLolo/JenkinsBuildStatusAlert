'use strict';

module.exports = function (server, pollingEngine) {
    let io = require('socket.io').listen(server);

    io.on('connection', function (socket) {
        socket.on('updateJob', (job) => {
            console.log('on test', job);
            pollingEngine.updateJob(job);
        });
    });
};