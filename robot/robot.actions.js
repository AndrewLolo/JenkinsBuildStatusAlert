'use strict';

const buildInfoStorage = require('../buildInfoStorage');

module.exports = {
    work: function (my) {
        every((1).second(), toggle.bind(my));
    }
};

function toggle() {
    return buildInfoStorage.getBuildStatus() ? this.succesfulBuildLed.toggle() : this.failedBuildLed.toggle();
}