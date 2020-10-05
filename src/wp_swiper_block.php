<?php

/*
 * Add an icons block to the Gutenberg editor
 */

class WP_Swiper{

    private $gb_settings;

	function __construct() {
        //$theme = wp_get_theme(); //get the theme object
        $this->gb_settings = array(
            'slug'       => 'wpswiper',
            'title'      => 'WP Swiper Block',
            'namespace'  => 'wb', //can't contain special characters
            'category'   => 'common', //`common`, `embed`, `formatting`, `layout`, `widgets`
            'icon'       => 'admin-users'
        );

		add_action( 'enqueue_block_editor_assets', array($this, 'register_gutenberg_block') );
		add_action( 'enqueue_block_editor_assets', array($this, 'enqueue_admin') );
		add_action( 'wp_enqueue_scripts', array($this, 'enqueue_frontend') );
	}

    function enqueue_admin() {
        wp_enqueue_style(
			$this->gb_settings['slug'].'-block-editor',
			wb_extension_uri( __FILE__ ) . "/css/admin_block.css",
			array(),
			'1.0.0'
		);
    }

    function enqueue_frontend() {
        wp_enqueue_style(
			$this->gb_settings['slug'].'-block-frontend',
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
            $this->gb_settings['slug'].'-frontend-js',
            wb_extension_uri( __FILE__ ) . "/js/frontend_block.js",
            array('jquery', 'swiperjs'),
            '1.0.0'
        );
        wp_enqueue_script(
            $this->gb_settings['slug'].'-frontend-js'
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
			$this->gb_settings['slug'].'-block-editor',
			wb_extension_uri( __FILE__ ) . "/js/admin_block.js",
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
		wp_localize_script( $this->gb_settings['slug'].'-block-editor', $this->gb_settings['slug'].'_settings', $this->gb_settings );

        wp_enqueue_script($this->gb_settings['slug'].'-block-editor');
		// register_block_type( $gb_settings['namespace'].'/'.$gb_settings['slug'], array(
		// 	'editor_script' => $gb_settings['slug'].'-block-editor',
		// 	'editor_style'  => $gb_settings['slug'].'-block-editor'
		// ) );
	}
}

$wp_swiper = new WP_Swiper();
