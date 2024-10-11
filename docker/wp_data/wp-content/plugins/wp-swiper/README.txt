=== WP Swiper ===
Contributors: digitalapps
Donate link: https://www.buymeacoffee.com/wpplugins
Tags: swiper, carousel, slider block, carousel block, swiper block
Requires at least: 3.0.1
Tested up to: 6.5
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Gutenberg Block The Most Modern Mobile Touch Slider. Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.

== Description ==

[WP Swiper](https://digitalapps.com/wordpress-plugins/wp-swiper/) Gutenberg Block is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. This powerful plugin is designed to be used in mobile websites, mobile web apps, and mobile native/hybrid apps, providing you with a range of features and customization options to help you create stunning slideshows, image galleries, and more.

= Features: =

* Use any block available in Gutenberg to create your slider
* Hardware accelerated transitions for fast and smooth animations
* Customize every aspect of your slider, including navigation and pagination options, autoplay settings, and more
* Mobile-first design ensures your sliders look great on any device
* Multiple slide layouts to choose from, including horizontal and vertical options
* Dynamic content support, including support for video slides and dynamic image sources
* Easy to use and beginner-friendly, with a user-friendly interface and intuitive controls
* Built with performance in mind, ensuring your sliders load quickly and efficiently

WP Swiper Gutenberg Block is the ultimate tool for creating visually stunning displays on mobile devices. Whether you're creating a mobile website, mobile web app, or mobile native/hybrid app, WP Swiper Gutenberg Block has everything you need to create beautiful and engaging slideshows, image galleries, and more.

Download WP Swiper Gutenberg Block today and take your mobile displays to the next level!

Support my work and fuel my creativity by buying me a virtual coffee on [BuyMeACoffee](https://www.buymeacoffee.com/wpplugins)

New Features and suggestions [Contact Me](https://digitalapps.com/contacts/)

== NEW RELEASE ==

WP Swiper version 1.2.0 is now live! This update introduces major changes, including a streamlined configuration with the new data-swiper attribute, a new WP Swiper Settings page, optimized asset loading, and more. Please note that the legacy configuration method will be deprecated in future releases.

For more details on what's new and how to migrate, check out the full update announcement on the [WP Swiper Blog](https://digitalapps.com/wp-swiper-plugin-update-exciting-new-features-and-improvements-v1-2-0/).

!!! IMPORTANT !!!

I use this plugin internally to build awesome sliders. At the moment only essential Swiper options are available. More to come!!!

If you urgently need a feature, please reach out to me.
If you are a designer and have an interface design in mind, let me know.

The backend UI is not the prettiest thing at the moment. But it's very intuitive and does the job! The interface is set up as a series of tabs, each tab controls a slide. Click on the tab and you may upload an image. Click on the WP Swiper block and you can control slider overlay + color overlay.

Another note re: backend UI, the original idea was generate the functional slider within the editor. But theres an issue with conteneditable HTML elements. I lodged [an issue](https://github.com/nolimits4web/swiper/issues/3801) on official swiper github repo for them to resolve. Leave a comment for them to prioritise the solution.

If you want to use the slide with text. 
Select slide, add image, the image gonna appear as a background on the frontend.
If you want to use the slider for images, just add a regular image block.

Features:
<ul>
<li>Add image overlay for the whole slider + control opacity</li>
<li>Add color overlay for the whole slider + control opacity</li>
<li>Add image to the slider</li>
<li>Add content (text, headings, anything...) to the slider</li>
<li>Position content for each slider</li>
</ul>

More Features to be added:
<ul>
<li>Control height of the slider</li>
<li>Animations</li>
<li>Other features from the official swiper docs</li>
</ul>

== Installation ==

Installing WP Swiper is easy, go to your WordPress admin panel and click on Plugins > Add New, searching for "WP Swiper".
Alternatively, you can install the plugin manually by downloading the plugin from wordpress.org/plugins
1. Upload the entire WP Swiper folder to the /wp-content/plugins/ directory
2. Activate the plugin through the ‘Plugins’ menu in WordPress.
3. Customize the plugin from the menu by selecting WP Swiper in the sidebar.


== Changelog ==
= 1.2.9 =
* Improve swiper block detection within content. Applicable for conditional bundle loading.

= 1.2.8 =
* Fix null reference bug for post_content

= 1.2.7 =
* Added debug setting to the settings page that outputs debug info to the frontend

= 1.2.6 =
* Added a debugging tool that allows users to reset slide slugs for each slide, ensuring proper synchronization with slide data in the parent block.

= 1.2.5 =
* Fix breakpoints

= 1.2.4 =
* Fix legacy code toggle

= 1.2.3 =
* fixed condition on swiper load

= 1.2.2 =
* Fixed breakpoints bug

= 1.2.1 =
* Missing files

= 1.2.0 =
* **Enhanced Swiper Configuration**: Swiper settings are now loaded through a single HTML element attribute (`data-swiper`), simplifying the previous method that relied on multiple `data` attributes.
* **Deprecation Warning:** The legacy method of using multiple data-attributes will remain functional but is scheduled for deprecation in future releases. Please note that this legacy mode only works for manually updated data-attributes—updates made via Gutenberg will not affect these attributes. If you prefer to keep using the old method, do not upgrade to version 1.2.0 and continue using version 1.1.3, which is still available for download. You can also enable the old WP Swiper script (which will no longer receive updates) via Settings > WP Swiper.
* **Swiper Bundle Update**: Upgraded Swiper to version **v11.1.14** for improved performance and features.
* **New Settings Page**: A dedicated **WP Swiper Settings** page is now available under **Settings > WP Swiper** for easy management and configuration.
* **Optimized Asset Loading**: Swiper assets (JS and CSS) are now loaded only on pages that utilize Swiper, improving site performance. To revert to the previous behavior (loading Swiper assets on every page), you can adjust this in **Settings > WP Swiper**.


= 1.1.13 =
* Fixed issue where thumbnails were not updating unless the page was refreshed and resaved.
* Resolved problem where typing after adding a new slide caused the first slide to be selected.
* Removed duplicate attribute state update.

= 1.1.12 =
* Thumbs were not updating, unless you refresh and resave

= 1.1.11 =
* Add pauseOnMouseEnter

= 1.1.10 =
* Duplicate slide bug

= 1.1.9 =
* Resolve conflict with disableOnInteraction true when autoplay false

= 1.1.8 =
* Fix shared options on multiple sliders

= 1.1.7 =
* Multiple Sliders next/prev buttons bug Fixed
* Added disableOnInteraction for autoplay

= 1.1.6 =
* Thumbs bug

= 1.1.5 =
* Revert: 1.1.4 as it breaks sites with custom swipers

= 1.1.4 =
* Load assets only if block used

= 1.1.3 =
* Fixed slides per view not allowing auto

= 1.1.2 =
* Support custom thumbs, and if no custom thumb is provided, use the content of the current slide.

= 1.1.1 =
* Added ability to remove Custom Slide Navigation Icons
* Prev/Next slide buttons wrapped in a div + container

= 1.1.0 =
* This was a big refactor, so bugs are expected, reach out to me with any issues
* Refactor Class Based components to functional components
* Fix slide reordering bug within the Document Overview (Left Sidebar)
* Added support for Custom Thumbnails
* Added support for Custom Slide Navigation Icons
* Added 2 new slider styles (More details on Digital Apps Blog)

= 1.0.34 =
* Add focal point controls to the image

= 1.0.33 =
* no lodash
* php 8.2 support

= 1.0.32 =
* Slide Image as cover

= 1.0.31 =
* Fix Vertical Orientation
* Bundle Updated

= 1.0.30 =
* Auto Height Fix
* Add Direction Option (Horizontal, Vertical)
* Sliders per view fix auto

= 1.0.29 =
* Enable sticky mode
* Introduce debugging tool

= 1.0.28 =
* Fix free mode feature
* Add bundle versioning

= 1.0.27 =
* allow classes to be set from the editor

= 1.0.26 =
* rename align classes

= 1.0.25 =
* Fix align full, align wide

= 1.0.24 =
* Added auto height and cross fade true when effect is set to fade

= 1.0.23 =
* Added ability to enable Thumbs

= 1.0.22 =
* Add ability to reorder slides by drag and drop via List View

= 1.0.21 =
* Updated Swiper bundle

= 1.0.20 =
* Removed jQuery as a dependency
* Bullet type bug
* Slider style bug
* Updated Swiper bundle

= 1.0.19 =
* Autoplay bug
* Settings with integers bug

= 1.0.18 =
* Breakpoints bug

= 1.0.17 =
* Added support for responsive breakpoints

= 1.0.16 =
* If slider pagination not enabled, explicitly set it to false to avoid side effects

= 1.0.15 =
* Slides per view can be auto

= 1.0.14 =
* Fix block validation error

= 1.0.13 =
* Fix Vertical Align
* Remove slider navigation SVGs
* Deprecate Horizontal Align controls

= 1.0.13 =
* Introduce MatrixAlign control
* Fix Delay timer

= 1.0.12 =
Fixed a bug with release on edges, and mouse wheel events always set to true

= 1.0.11 =
* Added clickable pagination

= 1.0.10 =
* Added pagination type

= 1.0.9 =
* Restore Mouse Wheel and RoE support

= 1.0.8 =
* Avoid block validation error breaking the block

= 1.0.7 =
* Added Mouse Wheel support
* Added release on edges support

= 1.0.6 =
* Added container width

== Upgrade Notice ==

You can upgrade to pro version to unlock extra features.