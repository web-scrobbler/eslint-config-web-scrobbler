import solid from 'eslint-plugin-solid';
import react from 'eslint-plugin-react';

export default {
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
