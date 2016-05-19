'use strict';

class RobotSetup {
    constructor(buildStorage, config) {
        Object.assign(this, config);
        this.buildStorage = buildStorage;
    }

    work(my) {
        every((1).second(), toggle.bind(my));
    }
}

function toggle() {
    return this.buildStorage.isStatusSuccess() ? toggleSuccessful.call(this) : toggleFailed.call(this);
}

function toggleSuccessful() {
    this.failedBuildLed.turnOff();
    this.succesfulBuildLed.toggle();
}

function toggleFailed() {
    this.succesfulBuildLed.turnOff();
    this.failedBuildLed.toggle();
}

module.exports = RobotSetup;

