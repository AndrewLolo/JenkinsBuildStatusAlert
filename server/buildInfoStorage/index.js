'use strict';

const STATUS = require('./constants');

class BuildInfoStorage {
    constructor() {
        this.status = STATUS.DEFAULT;
    }

    setSuccessStatus() {
        this.status = STATUS.SUCCESS;
    }

    setFailStatus() {
        this.status = STATUS.FAIL;
    }

    isStatusSuccess() {
        return this.status === STATUS.SUCCESS;
    }
}

module.exports = BuildInfoStorage;