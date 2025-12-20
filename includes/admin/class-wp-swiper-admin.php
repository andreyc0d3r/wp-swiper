<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/admin
 */

class WP_Swiper_Admin {

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private $version;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private $error_log;
    private $options;

    /**
     * Initialize the class and set its properties.
     *
     * @since           1.0.0
     * @param           string      $plugin_name        The name of this plugin.
     * @param           string      $version            The version of this plugin.
     */
    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;

        $this->set_options();

    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since   1.0.0
     */
    public function enqueue_styles() {

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since   1.0.0
     */
    public function enqueue_scripts( $hook_suffix ) {


    }

    /**
     * Sets the class variable $options
     */
    private function set_options() {
        $this->options = get_option( $this->plugin_name . '-options' );
    } // set_options()

    public function enqueue_block_editor_styles() {
        wp_enqueue_style(
			$this->plugin_name . '-block-editor-style',
			DAWPS_PLUGIN_URL . "css/admin_block.css",
			array(),
			'1.0.0'
		);
        wp_enqueue_style( 'dashicons' );
    }

    public function register_gutenberg_block() {

		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

        // Check if we have the new build assets
        $asset_file_path = DAWPS_PLUGIN_PATH . 'build/index.build.asset.php';

        if (file_exists($asset_file_path)) {
            $asset_file = include($asset_file_path);
            $dependencies = isset($asset_file['dependencies']) ? $asset_file['dependencies'] : array('wp-blocks', 'wp-element');
            $version = isset($asset_file['version']) ? $asset_file['version'] : DAWPS_PLUGIN_VERSION;
            $script_url = DAWPS_PLUGIN_URL . 'build/index.build.js';
        } else {
            // Minimal fallback - let WordPress handle most dependencies automatically
            $dependencies = array('wp-blocks', 'wp-element');
            $version = DAWPS_PLUGIN_VERSION;
            $script_url = DAWPS_PLUGIN_URL . 'gutenberg/js/admin_block.js';
        }

		wp_register_script(
			'wpswiper-block-editor',
			$script_url,
			$dependencies,
			$version
        );

        wp_enqueue_script( 'wpswiper-block-editor' );

    }
    

}
