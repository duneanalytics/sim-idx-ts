import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		files: ['src/**/*.{js,ts,tsx}'],
		ignores: ['*.d.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-expressions': ['error', { allowTaggedTemplates: true }],
			'no-console': 'error',
			eqeqeq: 'error',
		},
	},
];
