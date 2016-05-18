'use strict';

const Cylon = require('cylon');
const jenkinsapi = require('jenkins-api');

const jenkins = jenkinsapi.init('http://jenkins.marks.kyiv.epam.com/');

jenkins.last_build_info('01.0_POS_DEV1_buildShared', onSuccess);

function onSuccess(err, data) {
    if (err){ return console.log(err); }
    console.log(data);

    let buildStatus = data.result;
    let buildingStatus = data.building;
    let led = {
        driver: 'led'
    }
    switch (buildStatus) {
        case 'FAILED':
            led.pin = 16;
            break;

        case 'SUCCESS':
            led.pin = 11;
            break;

        default:
            break;
    }

    Cylon.robot({
        connections: {
            raspi: { adaptor: 'raspi' }
        },

        devices: {led},

        work: function(my) {
            if (buildingStatus) {
                every((1).second(), my.led.toggle);
            } else {
                my.led.turnOn();
            }
        }
    }).start();
}