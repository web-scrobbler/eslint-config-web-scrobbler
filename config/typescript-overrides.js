import tsEslint from 'typescript-eslint';
import tsdoc from 'eslint-plugin-tsdoc';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
	eslint.configs.recommended,
	tsEslint.configs.recommended,
	{
		plugins: { tsdoc },
		files: ['*.ts', '*.tsx'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: 'tsconfig.json',
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
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
			'@typescript-eslint/consistent-type-imports': 'error',
			'tsdoc/syntax': 'warn',
		},
	},
);
