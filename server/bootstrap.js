'use strict';

const BuildStorage = require('./buildInfoStorage');
const Robot = require('./robot');
const PollingEngine = require('./polling');
const socketInit = require('./socket');

class Setup {
    constructor(server) {
        this.server = server;
        this.buildStorage = new BuildStorage();
        this.robot = new Robot(this.buildStorage);
        this.pollingEngine = new PollingEngine(this.buildStorage);
    }

    start() {
        this.pollingEngine.start();
        this.robot.start();
        socketInit(this.server, this.pollingEngine);
    }
}

module.exports = Setup;
