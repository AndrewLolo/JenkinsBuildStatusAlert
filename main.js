const BuildStorage = require('./buildInfoStorage');
const Robot = require('./robot');
const PollingEngine = require('./polling');


const buildStorage = new BuildStorage();
const robot = new Robot(buildStorage);
const pollingEngine = new PollingEngine(buildStorage);

pollingEngine.start();
robot.start();