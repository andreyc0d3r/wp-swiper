<?php

/**
 * Block editor asset registration.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/admin
 */
class WP_Swiper_Admin {

	/**
	 * Plugin script handle prefix.
	 *
	 * @var string
	 */
	private $plugin_name;

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	private $version;

	/**
	 * Initialize the class.
	 *
	 * @param string $plugin_name Plugin script handle prefix.
	 * @param string $version     Plugin version.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Register and enqueue the block editor bundle.
	 */
	public function register_gutenberg_block() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$asset_file_path = DAWPS_PLUGIN_PATH . 'build/index.build.asset.php';
		$script_path     = DAWPS_PLUGIN_PATH . 'build/index.build.js';

		if ( ! file_exists( $asset_file_path ) || ! file_exists( $script_path ) ) {
			return;
		}

		$asset_file   = include $asset_file_path;
		$dependencies = isset( $asset_file['dependencies'] ) && is_array( $asset_file['dependencies'] )
			? $asset_file['dependencies']
			: array( 'wp-blocks', 'wp-element' );
		$version      = isset( $asset_file['version'] ) ? $asset_file['version'] : $this->version;

		wp_enqueue_script(
			$this->plugin_name . '-block-editor',
			DAWPS_PLUGIN_URL . 'build/index.build.js',
			$dependencies,
			$version,
			true
		);
	}
}
