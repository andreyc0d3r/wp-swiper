<?php

/**
 * Remove WP Swiper settings when the plugin is uninstalled.
 *
 * @package WP_Swiper
 */

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

delete_option( 'wp_swiper_options' );
