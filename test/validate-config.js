const { ESLint } = require('eslint');
const test = require('tape');

const javaScriptCode =
	'const foo = 1;\nconst bar = function () {\n	return 1;\n};\nbar(foo);\n';

testConfig('should have valid config', 'index.js', javaScriptCode);

function testConfig(description, configFilePath, codeSample) {
	test(description, async (t) => {
		const cli = new ESLint({
			overrideConfigFile: configFilePath,
		});

		const [{ errorCount }] = await cli.lintText(codeSample);

		t.equal(errorCount, 0);
		t.end();
	});
}
