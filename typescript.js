import baseRules from './config/base-rules';
import javaScriptOverrides from './config/javascript-overrides';
import typeScriptOverrides from './config/typescript-overrides';

export default [...baseRules, javaScriptOverrides, typeScriptOverrides];
