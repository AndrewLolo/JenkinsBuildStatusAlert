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

    toggle: function(my) {
        return getBuildResult() ? my.succesfulBuildLed.toggle : my.succesfulBuildLed.toggle;
    },

    work: function (my) {
        every((1).second(), my.toggle(my));
    }
};