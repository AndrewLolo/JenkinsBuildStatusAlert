'use strict';

const jenkinsapi = require('jenkins-api');

const jenkins = jenkinsapi.init('http://jenkins.marks.kyiv.epam.com/');
const pollingDelay = 1000;

let buildResult = '';

module.exports = getBuildResult;

setInterval(poll, pollingDelay);

function poll() {
    jenkins.last_success('01.0_POS_DEV1_buildShared', fetchBuildResult);
}

function fetchBuildResult(err, result) {
    if (err){ return console.log(err); }
    buildResult = result;
    console.log(buildResult);
}

function getBuildResult() {
    return buildResult;
}