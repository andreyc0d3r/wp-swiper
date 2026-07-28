<?php

/**
 * Regression test for the block editor asset loader.
 *
 * Run with: php tests/php/editor-assets.php
 */

$captured_styles     = array();
$captured_scripts    = array();
$captured_style_data = array();

function register_block_type() {}

function wp_enqueue_style( $handle, $src = '', $dependencies = array(), $version = false ) {
	global $captured_styles;

	$captured_styles[] = compact( 'handle', 'src', 'dependencies', 'version' );
}

function wp_style_add_data( $handle, $key, $value ) {
	global $captured_style_data;

	$captured_style_data[] = compact( 'handle', 'key', 'value' );
}

function wp_enqueue_script(
	$handle,
	$src = '',
	$dependencies = array(),
	$version = false,
	$in_footer = false
) {
	global $captured_scripts;

	$captured_scripts[] = compact(
		'handle',
		'src',
		'dependencies',
		'version',
		'in_footer'
	);
}

function fail_test( $message ) {
	fwrite( STDERR, "Editor asset regression test failed: {$message}\n" );
	exit( 1 );
}

$plugin_root = dirname( __DIR__, 2 ) . '/';

define( 'DAWPS_PLUGIN_PATH', $plugin_root );
define( 'DAWPS_PLUGIN_URL', 'https://example.test/wp-swiper/' );

require_once $plugin_root . 'includes/admin/class-wp-swiper-admin.php';

$asset_metadata = include $plugin_root . 'build/index.build.asset.php';
$admin          = new WP_Swiper_Admin( 'wpswiper', 'test-version' );

$admin->register_gutenberg_block();

$editor_styles = array_values(
	array_filter(
		$captured_styles,
		function ( $style ) {
			return 'wpswiper-block-editor' === $style['handle'];
		}
	)
);

if ( 1 !== count( $editor_styles ) ) {
	fail_test( 'build/index.css was not enqueued exactly once.' );
}

$editor_style = $editor_styles[0];

if (
	DAWPS_PLUGIN_URL . 'build/index.css' !== $editor_style['src'] ||
	$asset_metadata['version'] !== $editor_style['version']
) {
	fail_test( 'editor stylesheet URL or version is incorrect.' );
}

if (
	! in_array(
		array(
			'handle' => 'wpswiper-block-editor',
			'key'    => 'rtl',
			'value'  => 'replace',
		),
		$captured_style_data,
		true
	)
) {
	fail_test( 'editor stylesheet is missing RTL replacement metadata.' );
}

$dashicons = array_values(
	array_filter(
		$captured_styles,
		function ( $style ) {
			return 'dashicons' === $style['handle'];
		}
	)
);

if ( 1 !== count( $dashicons ) ) {
	fail_test( 'Dashicons was not enqueued exactly once.' );
}

if ( 1 !== count( $captured_scripts ) ) {
	fail_test( 'build/index.build.js was not enqueued exactly once.' );
}

$editor_script = $captured_scripts[0];

if (
	'wpswiper-block-editor' !== $editor_script['handle'] ||
	DAWPS_PLUGIN_URL . 'build/index.build.js' !== $editor_script['src'] ||
	$asset_metadata['dependencies'] !== $editor_script['dependencies'] ||
	$asset_metadata['version'] !== $editor_script['version'] ||
	true !== $editor_script['in_footer']
) {
	fail_test( 'editor script registration does not match its build metadata.' );
}

fwrite( STDOUT, "Editor asset regression test passed.\n" );
