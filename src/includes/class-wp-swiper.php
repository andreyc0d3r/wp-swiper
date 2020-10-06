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
            $this->version = '1.0.0';
        }
        $this->plguin_prefix = 'dawps';
        $this->plugin_name = 'wpswiper';

        //$theme = wp_get_theme(); //get the theme object
        $this->block_settings = array(
            'slug'       => 'wpswiper',
            'title'      => 'WP Swiper Block',
            'namespace'  => 'wb', //can't contain special characters
            'category'   => 'common', //`common`, `embed`, `formatting`, `layout`, `widgets`
            'icon'       => 'admin-users'
        );

    }
    
    private function load_dependencies() {
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-swiper-loader.php';
        $this->loader = new WP_Swiper_Loader();
    }

    private function define_admin_hooks() {

        $plugin_admin = new WP_Swiper_Admin( $this->get_plugin_name(), $this->get_version() );

        // $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
        // $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

        // Menu
        // $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_menu' );

        // Settings for the settings page
        // $this->loader->add_action( 'admin_init', $plugin_admin, 'register_settings' );
        
        $this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'register_gutenberg_block' );
        $this->loader->add_action( 'enqueue_block_editor_assets', $plugin_admin, 'enqueue_admin' );
        


    }

    private function define_public_hooks() {
        $plugin_public = new WP_Swiper_Public( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_frontend' );

    }

    function enqueue_admin() {
        wp_enqueue_style(
			$this->block_settings['slug'].'-block-editor',
			wb_extension_uri( __FILE__ ) . "/css/admin_block.css",
			array(),
			'1.0.0'
		);
    }

    function enqueue_frontend() {
        wp_enqueue_style(
			$this->block_settings['slug'].'-block-frontend',
			wb_extension_uri( __FILE__ ) . "/css/frontend_block.css",
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
            $this->block_settings['slug'].'-frontend-js',
            wb_extension_uri( __FILE__ ) . "/js/frontend_block.js",
            array('jquery', 'swiperjs'),
            '1.0.0'
        );
        wp_enqueue_script(
            $this->block_settings['slug'].'-frontend-js'
		);
		wp_enqueue_script(
			'swiperjs',
            'https://unpkg.com/swiper/swiper-bundle.min.js'
		);
    }

	function register_gutenberg_block(){
		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		wp_register_script(
			$this->block_settings['slug'] . '-block-editor',
			wb_extension_uri( __FILE__ ) . '/js/admin_block.js',
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

        wp_enqueue_script( $this->block_settings['slug'] . '-block-editor' );
		// register_block_type( $gb_settings['namespace'].'/'.$gb_settings['slug'], array(
		// 	'editor_script' => $gb_settings['slug'].'-block-editor',
		// 	'editor_style'  => $gb_settings['slug'].'-block-editor'
		// ) );
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
        return $this->prefix;
    }
}