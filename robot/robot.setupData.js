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
    return this.buildStorage.isStatusSuccess() ? this.succesfulBuildLed.toggle() : this.failedBuildLed.toggle();
}

module.exports = RobotSetup;

