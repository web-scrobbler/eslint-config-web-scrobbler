const solid = require('eslint-plugin-solid');
const react = require('eslint-plugin-react');

module.exports = {
	files: ['*.tsx'],
	plugins: { solid, react },
	...solid.configs.typescript,
	...react.configs.flat.recommended,
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
