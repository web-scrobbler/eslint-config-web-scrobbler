module.exports = {
	plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
	files: ['*.ts', '*.tsx'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: 'tsconfig.json',
		tsconfigRootDir: '.',
	},
	rules: {
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{ allowAny: true },
		],
		'tsdoc/syntax': 'warn',
	},
};
