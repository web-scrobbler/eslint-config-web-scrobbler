import baseRules from './config/base-rules.js';
import javaScriptOverrides from './config/javascript-overrides.js';
import typeScriptOverrides from './config/typescript-overrides.js';
import solidOverrides from './config/solid-overrides.js';

export default [
	...baseRules,
	javaScriptOverrides,
	solidOverrides,
	...typeScriptOverrides,
];
