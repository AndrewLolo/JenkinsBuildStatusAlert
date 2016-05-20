'use strict';

const jenkinsapi = require('jenkins-api');
const Locker = require('./pollLocker');
const config = require('./polling.config');

const jenkins = jenkinsapi.init(config.url);

class PollingEngine {
    constructor(buildStorage) {
        Object.assign(this, config);
        this.buildStorage = buildStorage;
        this.locker = new Locker();
    }

    start() {
        setInterval(this.poll.bind(this), this.delay);
    }

    poll() {
        if (!this.locker.isLocked()) {
            console.log('2', this.job);
            this.locker.lock();
            jenkins.job_info(this.job, this.fetchBuildStatus.bind(this));
        }
    }

    updateJob(job) {
        console.log('123', job);
        this.job = job;
    }

    fetchBuildStatus(err, result) {
        if (err) {
            this.buildStorage.setFailStatus();
            this.locker.unlock();
        }
        else {
            const buildSuccessful = result.lastSuccessfulBuild.number > (result.lastFailedBuild ? result.lastFailedBuild.number  : 0);
            const buildProcessing = result.lastBuild.number > result.lastCompletedBuild.number;

            buildSuccessful ? this.buildStorage.setSuccessStatus() : this.buildStorage.setFailStatus();
            buildProcessing ? this.buildStorage.setProcessingStatus() : this.buildStorage.setCompleteStatus();
            this.locker.unlock();
        }
    }
}


module.exports = PollingEngine;

