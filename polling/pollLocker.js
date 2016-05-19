'use strict';

class PollLocker {
    constructor() {
        this.locked = false;
    }

    lock() {
        this.locked = true;
    }

    unlock() {
        this.locked = false;
    }

    isLocked() {
        return this.locked;
    }
}


module.exports = new PollLocker();