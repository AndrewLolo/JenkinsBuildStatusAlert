'use strict';

const STATUS = require('./constants');

class BuildInfoStorage {
    constructor() {
        this.status = STATUS.DEFAULT;
        this.processing = STATUS.DEFAULT;
    }

    setSuccessStatus() {
        this.status = STATUS.SUCCESS;
    }

    setFailStatus() {
        this.status = STATUS.FAIL;
    }

    setProcessingStatus() {
        this.processing = STATUS.PROCESSING;
    }

    setCompleteStatus() {
        this.processing = STATUS.COMPLETE;
    }

    isStatusSuccess() {
        return this.status === STATUS.SUCCESS;
    }

    isStatusProcessing() {
        return this.processing === STATUS.PROCESSING;
    }
}

module.exports = BuildInfoStorage;