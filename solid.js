import baseRules from './config/base-rules';
import javaScriptOverrides from './config/javascript-overrides';
import typeScriptOverrides from './config/typescript-overrides';
import solidOverrides from './config/solid-overrides';

export default [
	...baseRules,
	javaScriptOverrides,
	solidOverrides,
	...typeScriptOverrides,
];
