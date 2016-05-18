const Cylon = require('cylon');
const jenkinsapi = require('jenkins-api');

const jenkins = jenkinsapi.init('http://jenkins.marks.kyiv.epam.com/');

jenkins.last_build_info('01.0_POS_DEV1_buildShared', function(err, data) {
    if (err){ return console.log(err); }
    console.log(data)
});


Cylon.robot({
    connections: {
        raspi: { adaptor: 'raspi' }
    },

    devices: {
        led: { driver: 'led', pin: 11 }
    },

    work: function(my) {
        every((1).second(), my.led.toggle);
    }
}).start();