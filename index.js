const baseRules = require('./config/base-rules');
const jsOverrides = require('./config/javascript-overrides');

module.exports = [...baseRules, jsOverrides];
