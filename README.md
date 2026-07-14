# WP Swiper

WP Swiper is an open-source WordPress plugin for building responsive [Swiper](https://swiperjs.com/) carousels in the block editor. Each slide accepts nested WordPress blocks, allowing images, headings, buttons, video, and layouts to be combined without a separate page builder.

## Features

- Nested WordPress blocks inside every slide
- Horizontal and vertical sliders
- Navigation, pagination, autoplay, loop mode, and free mode
- Responsive breakpoints, spacing, offsets, and slides per view
- Background images, focal points, overlays, thumbnails, and custom navigation icons
- Drag-and-drop image uploads in the block editor
- Conditional frontend asset loading
- Bundled Swiper 14 runtime with no jQuery dependency
- No analytics, advertising, tracking, or telemetry

## Requirements

- WordPress 6.3 or newer
- PHP 7.4 or newer
- A block-based editing environment

The Swiper 14 runtime supports Chrome and Edge 110+, Firefox 110+, and Safari 16.4+. Node.js is required only for development. End users can install a packaged release without Node.js.

## Installation

The recommended installation is through [WordPress.org](https://wordpress.org/plugins/wp-swiper/):

1. Open Plugins > Add New in WordPress.
2. Search for **WP Swiper**.
3. Install and activate the plugin.
4. Add the WP Swiper block in the block editor.

For a GitHub release, download `wp-swiper.zip` from the Releases page and upload it through Plugins > Add New > Upload Plugin.

## Development

```bash
git clone https://github.com/andreyc0d3r/wp-swiper.git
cd wp-swiper
npm ci
npm start
```

Create a production build:

```bash
npm run build
```

Create and verify an installable archive:

```bash
npm run package
```

The archive is written to `dist-zip/wp-swiper.zip`. See the [build and release guide](docs/build-and-deployment.md) for the complete release process.

Compiled files in `build/` are committed so the repository remains installable without a local Node.js build.

## Support and contributing

- Ask usage questions in the [WordPress.org support forum](https://wordpress.org/support/plugin/wp-swiper/).
- Report reproducible bugs with the [GitHub bug form](https://github.com/andreyc0d3r/wp-swiper/issues/new?template=bug_report.yml).
- Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.
- Follow [SECURITY.md](SECURITY.md) for private vulnerability reports.

## License

WP Swiper is licensed under the [GNU General Public License v2.0 or later](LICENSE).

The bundled Swiper runtime is licensed separately under the MIT License. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
