'use strict';

const getBuildResult = require('./polling');

module.exports = {
    connections: {
        raspi: {
            adaptor: 'raspi'
        }
    },
    devices: {
        succesfulBuildLed: {
            driver: 'led',
            pin: 11
        },
        failedBuildLed: {
            driver: 'led',
            pin: 16
        }
    },

    work: function (my) {
        every((1).second(), toggle.bind(my));
    }
};


function toggle() {
    return getBuildResult() ? this.succesfulBuildLed.toggle() : this.failedBuildLed.toggle()
}