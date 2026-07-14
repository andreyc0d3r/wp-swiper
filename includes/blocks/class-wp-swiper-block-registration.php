<?php

/**
 * Register the WP Swiper block types with WordPress.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/includes
 */
class WP_Swiper_Block_Registration {

	/**
	 * Register WordPress hooks.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Register the parent slider block and child slide block.
	 */
	public function register_blocks() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$renderer = new WP_Swiper_Renderer();
		$blocks   = array( 'slides', 'slide' );

		foreach ( $blocks as $block ) {
			$block_path = DAWPS_PLUGIN_PATH . 'build/blocks/' . $block;

			if ( file_exists( $block_path . '/block.json' ) ) {
				register_block_type(
					$block_path,
					array(
						'render_callback' => array( $renderer, 'render_callback' ),
					)
				);
			}
		}
	}
}
