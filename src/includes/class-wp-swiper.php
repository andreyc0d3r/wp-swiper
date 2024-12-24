<?php

class WP_Swiper {
    
    protected $loader;
    protected $plugin_prefix;
    protected $plugin_name;
    protected $version;
    protected $block_settings;

	function __construct() {
        if ( defined( 'DAWPS_PLUGIN_VERSION' ) ) {
            $this->version = DAWPS_PLUGIN_VERSION;
        } else {
            $this->version = '1.2.15';
        }
        $this->plugin_prefix = 'dawps';
        $this->plugin_name = 'wpswiper';
        
        $this->load_dependencies();
        $this->define_admin_hooks();
        $this->define_public_hooks();

    }
    
    private function load_dependencies() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-swiper-settings.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-swiper-loader.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-wp-swiper-admin.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-swiper-block-detector.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-wp-swiper-public.php';

        $this->loader = new WP_Swiper_Loader();
    }

    private function define_admin_hooks() {

        $plugin_admin = new WP_Swiper_Admin( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'register_gutenberg_block' );
        $this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'enqueue_admin_styles' );
        
    }
    
    private function define_public_hooks() {
        $plugin_public = new WP_Swiper_Public( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_frontend_assets' );


    }

    function enqueue_admin() {
        wp_enqueue_style(
			$this->plugin_name . '-block-editor-admin-style',
			plugin_dir_path( dirname( __FILE__ ) ) . "/css/admin_block.css",
			array(),
			'1.0.0'
		);
    }
    
    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    1.0.0
     */
    public function run() {
        $this->loader->run();
    }

    /**
     * The name of the plugin used to uniquely identify it within the context of
     * WordPress and to define internationalization functionality.
     *
     * @since     1.0.0
     * @return    string    The name of the plugin.
     */
    public function get_plugin_name() {
        return $this->plugin_name;
    }

    /**
     * Retrieve the version number of the plugin.
     *
     * @since     1.0.0
     * @return    string    The version number of the plugin.
     */
    public function get_version() {
        return $this->version;
    }

    /**
     * Retrieve the prefix of the plugin.
     *
     * @since     1.0.0
     * @return    string    The prefix of the plugin.
     */
    public function get_prefix() {
        return $this->plugin_prefix;
    }
}