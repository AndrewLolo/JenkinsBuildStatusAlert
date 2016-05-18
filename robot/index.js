'use strict';

const Cylon = require('cylon');
const robotActions = require('./robot.config.js');
const robotConfig = require('./robot.config.js');


const robotSetupData = Object.assign({}, robotConfig, robotActions);

module.exports = Cylon.robot(robotSetupData);