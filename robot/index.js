'use strict';

const Cylon = require('cylon');
const RobotSetup = require('./robot.setupData');
const robotConfig = require('./robot.config');

class Robot {
    constructor(buildStorage) {
        this.setupData = new RobotSetup(buildStorage, robotConfig);
    }

    start() {
        Cylon.robot(this.setupData).start();
    }
}


module.exports = Robot;