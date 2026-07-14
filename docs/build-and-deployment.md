# Build and release guide

This guide covers development builds, distributable plugin archives, and releases for WP Swiper.

## Requirements

- Node.js 20.19.0 or newer
- npm 10 or newer
- PHP 7.4 or newer for local syntax checks
- A WordPress 6.3 or newer test site

## Development

Install the locked dependencies:

```bash
npm ci
```

Start the asset watcher:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Compiled assets are written to `build/`. These files are tracked because WordPress installs the plugin without running Node.js.

## Distribution archive

Build and verify the installable archive:

```bash
npm run package
```

The archive is written to `dist-zip/wp-swiper.zip`. The package verifier checks version consistency, required files, excluded development files, and common private-data patterns.

Before publishing an archive, install it on a clean WordPress site and verify:

1. Plugin activation succeeds without warnings.
2. Both WP Swiper blocks appear in the block editor.
3. Slides can be added, reordered, edited, and removed.
4. Media uploads and Media Library selection work.
5. Saved sliders render correctly on the frontend.
6. Navigation, pagination, autoplay, thumbnails, and responsive breakpoints work as configured.
7. Deactivation and uninstall complete without errors.

## GitHub release

Releases are created from tags matching `v*` by the GitHub release workflow.

1. Update the version in `package.json`, `wp-swiper.php`, and `README.txt`.
2. Update the changelog in `README.txt`.
3. Run `npm install --package-lock-only` if package metadata changed.
4. Run `npm test` and `npm run package`.
5. Test the generated archive on a clean WordPress site.
6. Commit the release changes.
7. Create and push a signed tag such as `v1.4.5`.

The workflow builds a fresh archive and attaches it to the GitHub release.

## WordPress.org release

Set the path to a checked-out WordPress.org SVN trunk and run:

```bash
WP_SWIPER_SVN_PATH=/path/to/wp-swiper-svn/trunk npm run publish:svn
```

Review the SVN diff before committing. WordPress.org assets such as banners and screenshots are managed in the SVN `assets` directory and are not copied by this command.

## Release contents

The installable archive includes runtime PHP, compiled assets, the bundled Swiper library, the WordPress.org readme, and license notices. Development sources, GitHub configuration, Node dependencies, and local files are excluded.
