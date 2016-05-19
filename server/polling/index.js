'use strict';

const jenkinsapi = require('jenkins-api');
const locker = require('./pollLocker');
const config = require('./polling.config');

const jenkins = jenkinsapi.init(config.url);

class PollingEngine {
    constructor(buildStorage) {
        Object.assign(this, config);
        this.buildStorage = buildStorage;
        locker.unlock();
    }

    start() {
        setInterval(this.poll.bind(this), this.delay);
    }

    poll() {
        if (!locker.isLocked()) {
            console.log('2', this.job);
            locker.lock();
            jenkins.job_info(this.job, this.fetchBuildStatus.bind(this));
        }
    }

    updateJob(job) {
        console.log('123', job);
        this.job = job;
    }

    fetchBuildStatus(err, result) {
        if (err) {
            buildInfoStorage.setFailStatus();
            locker.unlock();
        }
        else {
            result = result.lastSuccessfulBuild.number > result.lastFailedBuild.number;
            result ? this.buildStorage.setSuccessStatus() : this.buildStorage.setFailStatus();
            locker.unlock();
        }
    }
}


module.exports = PollingEngine;

