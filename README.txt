=== WP Swiper ===
Contributors: digitalapps
Donate link: https://www.buymeacoffee.com/wpplugins
Tags: swiper, carousel, slider block, carousel block, swiper block
Requires at least: 6.3
Tested up to: 7.0
Stable tag: 1.4.5
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Build responsive Swiper carousels with images, media, and nested WordPress blocks.

== Description ==

[WP Swiper](https://digitalapps.com/wordpress-plugins/wp-swiper/) adds a flexible carousel block to the WordPress editor. Each slide accepts standard nested blocks, so you can combine images, headings, buttons, video, and other block content without using a separate page builder.

= Highlights =

* Build slides with nested WordPress blocks.
* Create horizontal or vertical responsive carousels.
* Configure navigation, pagination, autoplay, loop mode, free mode, and transition effects.
* Set responsive breakpoints, spacing, offsets, and slides per view.
* Add background images, focal points, overlays, thumbnails, and custom navigation icons.
* Drag image files into the editor to create slides.
* Load frontend assets only when a slider is detected, with an optional global-loading setting for custom setups.
* Use the bundled Swiper 14 runtime without a jQuery dependency.

= Privacy =

WP Swiper does not include analytics, advertising, tracking, or telemetry. Images selected through the editor are handled by the standard WordPress Media Library and REST API.

= Support and development =

For usage questions, use the [WordPress.org support forum](https://wordpress.org/support/plugin/wp-swiper/). Report reproducible bugs and feature requests on [GitHub](https://github.com/andreyc0d3r/wp-swiper/issues). Security issues should be reported privately according to the repository security policy.

Development is supported through [Buy Me a Coffee](https://www.buymeacoffee.com/wpplugins).

= Developer filter =

The `wpswiper_frontend_js_register_args` filter can change the dependencies and loading arguments used for the plugin's frontend script.

`
add_filter( 'wpswiper_frontend_js_register_args', function ( $args ) {
	$args['deps'][] = 'jquery';
	$args['args']   = array(
		'in_footer' => true,
		'strategy'  => 'defer',
	);

	return $args;
} );
`

See the [wp_enqueue_script() documentation](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) for supported loading arguments.

== Installation ==

1. In WordPress, go to Plugins > Add New.
2. Search for "WP Swiper" and select Install Now.
3. Activate the plugin.
4. Add the WP Swiper block in the block editor and insert content into its slides.

For a manual installation, upload the `wp-swiper` directory to `/wp-content/plugins/` and activate the plugin from the Plugins screen.

== Frequently Asked Questions ==

= Can a slide contain other WordPress blocks? =

Yes. Each slide supports nested blocks such as images, headings, paragraphs, buttons, video, and layout blocks.

= Does WP Swiper load assets on every page? =

By default, frontend assets load when the plugin detects a WP Swiper block. The Settings > WP Swiper screen includes an option to load them globally for custom templates or integrations that cannot be detected automatically.

= Does the plugin send data to an external service? =

No. WP Swiper has no analytics, tracking, advertising, or telemetry service.

= Which browsers are supported? =

The bundled Swiper 14 runtime supports Chrome and Edge 110 or newer, Firefox 110 or newer, and Safari 16.4 or newer.

== Contributing ==

WP Swiper is developed openly on [GitHub](https://github.com/andreyc0d3r/wp-swiper/), and community contributions are welcome.

* Report reproducible bugs through the [GitHub issue tracker](https://github.com/andreyc0d3r/wp-swiper/issues).
* Suggest focused improvements and new features.
* Improve documentation, translations, accessibility, or test coverage.
* Submit pull requests after reviewing the [contribution guide](https://github.com/andreyc0d3r/wp-swiper/blob/main/CONTRIBUTING.md).

Please report security issues privately according to the [security policy](https://github.com/andreyc0d3r/wp-swiper/security/policy).

== Screenshots ==

1. Build and configure a responsive slider directly in the WordPress block editor.
2. Select a slide to manage its background image, thumbnail, focal point, and content blocks.
3. A published WP Swiper slider with navigation and clickable pagination.

== Changelog ==

= 1.4.5 =

* Updated the bundled Swiper runtime to 14.0.5.
* Added reproducible dependency syncing for the bundled Swiper assets.
* Added public development and contribution documentation.
* Updated the browser baseline to Chrome and Edge 110+, Firefox 110+, and Safari 16.4+.

= 1.4.4 =

* Improved the editor interface and slide controls.
* Refreshed the WordPress.org screenshots.
* Confirmed compatibility with WordPress 7.0.

= 1.4.3 =

* Added multi-image Media Library selection for creating slides.
* Retained drag-and-drop image creation as an alternative workflow.

= 1.4.2 =

* Fixed an editor error caused by reading `substring` from an undefined value.

= 1.4.1 =

* Updated image selection to use the WordPress Media Library.

= 1.4.0 =

* Updated the bundled Swiper library to 12.0.2.
* Modernized the block editor interface and slide-management controls.
* Added drag-and-drop image creation and improved drop-zone feedback.
* Added new styling controls and prepared the editor for future enhancements.
* Fixed autoplay attribute references and block validation issues.

= 1.3.10 =

* Improved auto-slide-width performance by removing an unnecessary high-frequency event handler.

= 1.3.9 =

* Added automatic slide-width support.

= 1.3.8 =

* Fixed autoplay behavior.

= 1.3.7 =

* Extended free-mode support.
* Added `loopAdditionalSlides` support.
* Removed the jQuery dependency.

= 1.3.6 =

* Allowed an autoplay delay of zero.

= 1.3.5 =

* Fixed overlay-color persistence.
* Added an option to display slider overflow.

= 1.3.4 =

* Fixed settings registration for the WP Swiper options page.

= 1.3.3 =

* Standardized asset paths through plugin URL and path constants.

= 1.3.1 =

* Added an overlay-color reset control.

= 1.3.0 =

* Reorganized the plugin structure.
* Improved the editor interface.
* Updated the bundled Swiper library.
* Added slides-per-group support.

= 1.2.18 =

* Added support for `async` and `defer` frontend script-loading strategies.
* Extended the frontend registration filter to control dependencies and script arguments.

= 1.2.0 =

* Consolidated slider settings into the `data-swiper` configuration attribute.
* Added the WP Swiper settings page.
* Added conditional frontend asset loading.
* Updated the bundled Swiper library to 11.1.14.

For earlier release history, see the [WordPress.org development page](https://wordpress.org/plugins/wp-swiper/#developers).
