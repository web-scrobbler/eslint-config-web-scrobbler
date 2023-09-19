module.exports = {
	files: ['*.tsx'],
	plugins: ['solid', 'react'],
	extends: ['plugin:solid/recommended', 'plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: 'tsconfig.json',
		tsconfigRootDir: '.',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/no-unknown-property': 'off',
		'react/jsx-key': 'off',
	},
};
