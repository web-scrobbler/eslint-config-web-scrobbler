const baseRules = require('./config/base-rules');
const javaScriptOverrides = require('./config/javascript-overrides');
const typeScriptOverrides = require('./config/typescript-overrides');
const solidOverrides = require('./config/solid-overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [javaScriptOverrides, solidOverrides, typeScriptOverrides],
});
