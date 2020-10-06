<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    AdUnblocker
 * @subpackage AdUnblocker/admin
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

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in AdUnblocker_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The AdUnblocker_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        wp_enqueue_style( 'wp-color-picker' );
        wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/adunblocker-admin.css', array(), $this->version, 'all' );

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

    function register_gutenberg_block(){
		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		wp_register_script(
			$this->plugin_name . '-block-editor',
			plugin_dir_url( __FILE__ ) . '/gutenberg/js/admin_block.js',
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-data',
				'wp-compose',
                'wp-components',
                'wp-api',
                'wp-api-request',
                'wp-i18n'
			),
			'1.0.0'
		);

        wp_enqueue_script( $this->plugin_name . '-block-editor' );
		// register_block_type( $gb_settings['namespace'].'/'.$gb_settings['slug'], array(
		// 	'editor_script' => $gb_settings['slug'].'-block-editor',
		// 	'editor_style'  => $gb_settings['slug'].'-block-editor'
		// ) );
    }
    

}
