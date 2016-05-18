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

    getBuildStatus() {
        return this.status;
    }
}

module.exports = new BuildInfoStorage();