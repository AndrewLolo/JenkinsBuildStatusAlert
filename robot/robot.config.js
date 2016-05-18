'use strict';

const buildInfoStorage = require('../buildInfoStorage');

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
    }
};