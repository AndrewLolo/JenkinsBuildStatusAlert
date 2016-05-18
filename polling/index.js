'use strict';

const jenkinsapi = require('jenkins-api');
const locker = require('./pollLocker');
const config = require('./polling.config.js');
const buildInfoStorage = require('../buildInfoStorage');

const jenkins = jenkinsapi.init(config.url);

class PollingEngine {
    constructor(config) {
        Object.assign(this, config);
    }

    start() {
        setInterval(this.poll.bind(this), this.delay);
    }

    poll() {
        if (locker.isLocked()) {
            locker.lock();
            jenkins.last_success(this.job, this.fetchBuildStatus);
        }
    }

    fetchBuildStatus(err, result) {
        if (err) {
            throw new Error(err);
        }
        result ? buildInfoStorage.setSuccessStatus() : buildInfoStorage.setFailStatus();
        locker.unlock();
    }
}

module.exports = new PollingEngine();

