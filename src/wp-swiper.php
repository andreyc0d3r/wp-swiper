<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://digitalapps.com
 * @since             1.0.0
 * @package           WpSwiper
 *
 * @wordpress-plugin
 * Plugin Name:       WP Swiper
 * Plugin URI:        https://digitalapps.com/wp-swiper/
 * Description:       Swiper JS as a Gutenberg Block.
 * Version:           1.2.17
 * Author:            Digital Apps
 * Author URI:        https://digitalapps.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wpswiper
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

define( 'DAWPS_PLUGIN_VERSION', '1.2.17' );
define( 'DAWPS_BUNDLE_VERSION', '11.1.14' );

function activate_wpswiper() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-swiper-activator.php';
    WP_Swiper_Activator::activate();
}

function deactivate_wpswiper() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-swiper-deactivator.php';
    WP_Swiper_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wpswiper' );
register_deactivation_hook( __FILE__, 'deactivate_wpswiper' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-swiper.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_swiper() {

    $plugin = new WP_Swiper();
    $plugin->run();

}
run_wp_swiper();