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
    this.buildStorage.isStatusProcessing() ? this.succesfulBuildLed.toggle() : turnOn(this.succesfulBuildLed);
}

function toggleFailed() {
    this.succesfulBuildLed.turnOff();
    this.buildStorage.isStatusProcessing() ? this.failedBuildLed.toggle() : turnOn(this.failedBuildLed);
}

function turnOn(led) {
    if (!led.isOn()) {
        led.turnOn();
    }
}


module.exports = RobotSetup;

