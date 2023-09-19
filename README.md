# eslint-config-web-scrobbler [![NPM][npm-badge]][npm] [![Test][workflow-badge]][workflow]

ESLint configuration file for Web Scrobbler projects.

## Usage

You can install `@web-scrobbler/eslint-config` by a following way:

```sh
> npm install --save-dev @web-scrobbler/eslint-config
```

### JavaScript

Add `web-scrobbler` to the `extends` array in your `.eslintrc.*` file:

```json
{
	"extends": ["some-other-config-you-use", "web-scrobbler"]
}
```

### TypeScript

Install peer dependencies first:

```sh
> npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Then, add `web-scrobbler/typescript` to the `extends` array in your `.eslintrc.*` file:

```json
{
	"extends": ["some-other-config-you-use", "web-scrobbler/typescript"]
}
```

You don't need to include `web-scrobbler` config - `web-scrobbler/typescript` handles both JS and TS files.

### Vue

Install peer dependencies first:

```sh
> npm install --save-dev eslint-plugin-vue
```

Then, add `web-scrobbler/vue` cto the `extends` array in your `.eslintrc.*` file:

```json
{
	"extends": [
		"some-other-config-you-use",
		"web-scrobbler",
		"web-scrobbler/vue"
	]
}
```

`web-scrobbler/vue` config is applied to Vue SFCs only, so you should add `web-scrobbler` (or `web-scrobbler/typescript`) and `web-scrobbler/vue` configs to the `extends` array.

## License

Licensed under the [MIT License](./LICENSE).

<!-- Badges -->

[npm-badge]: https://img.shields.io/npm/v/@web-scrobbler/eslint-config
[workflow-badge]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/workflows/Lint/badge.svg

<!-- Related pages -->

[npm]: https://www.npmjs.com/package/@web-scrobbler/eslint-config
[workflow]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/actions?query=workflow%3ALint
