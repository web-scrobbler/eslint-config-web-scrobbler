module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	rules: {
		/*
		 * Possible errors
		 */

		// Allow unnecessary parentheses
		'no-extra-parens': 'off',

		// Disallow template literal placeholder syntax in regular string
		'no-template-curly-in-string': 'error',

		/*
		 * Best practices
		 */

		// Enforce consistent brace style for all control statements
		curly: 'error',

		// Require the use of === and !==
		eqeqeq: 'error',

		// Disallow `else` blocks after `return` statements in `if` statements
		'no-else-return': 'error',

		// Disallow empty functions
		'no-empty-function': 'error',

		// Disallow function declarations and expressions inside loop statements
		'no-loop-func': 'error',

		// Disallow new operators with the String, Number, and Boolean objects
		'no-new-wrappers': 'error',

		// Disallow reassigning function parameters
		'no-param-reassign': 'error',

		// Disallow unnecessary concatenation of strings
		'no-useless-concat': 'error',

		// Disallow redundant return statements
		'no-useless-return': 'error',

		/*
		 * Stylistic issues
		 */

		// Require CamelCase
		camelcase: ['error', { properties: 'never' }],

		// Disallow `if` statements as the only statement in `else` blocks
		'no-lonely-if': 'error',

		// Disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// Disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': 'error',

		// Enforce variables to be declared separately in functions
		'one-var': ['error', 'never'],

		// Require single quotes
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],

		// Enforce consistent spacing after the // or /* in a comment
		'spaced-comment': 'error',

		/*
		 * ECMAScript 6
		 */

		// Require parentheses around arrow function arguments
		'arrow-parens': 'error',
		'arrow-spacing': 'error',

		// Require let or const instead of var
		'no-var': 'error',

		// Require method and property shorthand syntax for object literals
		'object-shorthand': ['error', 'always'],

		// Require `const` declarations for variables
		// that are never reassigned after declared
		'prefer-const': ['error', { destructuring: 'all' }],

		// Require template literals instead of string concatenation
		'prefer-template': 'error',

		// Disallow spacing around embedded expressions of template strings
		'template-curly-spacing': 'error',
	},
};
