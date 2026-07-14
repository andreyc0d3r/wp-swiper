# Contributing to WP Swiper

Thank you for helping improve WP Swiper. Bug reports, documentation fixes, tests, and focused code contributions are welcome.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Before opening an issue

- Search existing issues and the [WordPress.org support forum](https://wordpress.org/support/plugin/wp-swiper/).
- Use GitHub issues for reproducible bugs and scoped feature requests.
- Use the support forum for installation, configuration, and general usage questions.
- Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).

Do not include credentials, private URLs, personal data, database exports, or production logs containing sensitive information.

## Development setup

Requirements:

- Node.js 20.19.0 or newer
- npm 10 or newer
- PHP 7.4 or newer
- WordPress 6.3 or newer

Install dependencies and start the asset watcher:

```bash
npm ci
npm start
```

JavaScript and SCSS source files are in `src/`. PHP integration code is in `includes/`. Production assets are generated in `build/`.

## Making a change

1. Create a focused branch from the current default branch.
2. Keep changes limited to one bug or feature.
3. Follow the existing WordPress, PHP, JavaScript, and CSS conventions.
4. Preserve backward compatibility for saved blocks unless the change includes a migration.
5. Add or update documentation when behavior changes.
6. Rebuild and include the generated `build/` files when source assets change.

Do not add or upgrade dependencies without discussing the change first.

## Validation

Run the automated checks:

```bash
npm test
npm run package
```

Install the generated `dist-zip/wp-swiper.zip` on a clean WordPress site and test the affected editor and frontend behavior. Include the WordPress, PHP, and browser versions used in the pull request.

## Pull requests

Use a clear title and explain:

- The problem being solved
- The chosen approach
- User-facing or compatibility effects
- Validation performed
- Screenshots or recordings for interface changes

Keep pull requests small enough to review. Maintainers may ask for changes before merging.
