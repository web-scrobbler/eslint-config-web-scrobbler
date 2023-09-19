module.exports = {
	plugins: ['jsdoc'],
	files: ['*.js', '*.jsx'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: '2017',
		sourceType: 'module',
	},
	rules: {
		strict: ['error', 'global'],

		/*
		 * JSDoc plugin
		 */

		'jsdoc/check-param-names': 'warn',
		'jsdoc/check-syntax': 'warn',
		'jsdoc/check-tag-names': 'warn',
		'jsdoc/check-types': ['warn', { noDefaults: true }],
		'jsdoc/no-undefined-types': 'warn',
		'jsdoc/require-param': 'warn',
		'jsdoc/require-param-description': 'warn',
		'jsdoc/require-param-name': 'warn',
		'jsdoc/require-param-type': 'warn',
		'jsdoc/require-returns-check': 'warn',
		'jsdoc/require-returns-description': 'warn',
		'jsdoc/require-returns-type': 'warn',
		'jsdoc/valid-types': 'warn',
	},
};
