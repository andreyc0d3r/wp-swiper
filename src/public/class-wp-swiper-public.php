<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    AdUnblocker
 * @subpackage AdUnblocker/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    AdUnblocker
 * @subpackage AdUnblocker/public
 * @author     Andrey Matveyev <andrey@digitalapps.co>
 */
class WP_Swiper_Public {

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
    private $file_name;
    private $settings;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string    $plugin_name       The name of the plugin.
     * @param      string    $version    The version of this plugin.
     */
    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->settings = $this->get_options_data();

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function localize_script() {

        $nonces = apply_filters( 'daau_nonces', array(
            'get_plugin_data'       => wp_create_nonce( 'get-plugin-data' )
        ) );

        $data = apply_filters( 'daau_data', array(
            'this_url'               => esc_html( addslashes( home_url() ) ) . '/wp-admin/admin-ajax.php',
            'nonces'                 => $nonces
        ) );

        // wp_localize_script( $handle, $name, $data );
        wp_localize_script(
            $this->plugin_name,
            'daau_app',
            $data
        );

    }

    public function get_options_data() {

        $settings = array();
        $settings = get_option( $this->plugin_name . '-options' );

        return $settings;

    }

    function enqueue_frontend_assets() {
        wp_enqueue_style(
			$this->plugin_name . '-block-frontend',
			plugin_dir_path( dirname( __FILE__ ) ) . "/css/frontend_block.css",
			array(),
			'1.0.0'
        );
        
		wp_enqueue_style(
			'swiper-bundle',
			"https://unpkg.com/swiper/swiper-bundle.min.css",
			array(),
			'1.0.0'
        );
        
        wp_register_script(
            $this->plugin_name . '-frontend-js',
            plugin_dir_path( dirname( __FILE__ ) ) . "/js/frontend_block.js",
            array('jquery', 'swiperjs'),
            '1.0.0'
        );

        wp_enqueue_script(
            $this->plugin_name . '-frontend-js'
        );
        
		wp_enqueue_script(
			'swiperjs',
            'https://unpkg.com/swiper/swiper-bundle.min.js'
		);
    }

}
